from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from cart.models import Cart, CartItem
from django.utils import translation
from product.models import Product
from rest_framework import status
from django.db.models import Sum
from django.conf import settings


def get_main_image_url(request, product):
    """Повертає абсолютний URL головного зображення товару."""
    main_image = product.productimage_set.filter(is_main=True).first()
    if main_image and main_image.image:
        return request.build_absolute_uri(main_image.image.url)
    return None


class CartViewSet(ViewSet):
    """
    ViewSet для роботи з кошиком користувача.

    Дозволені операції та HTTP-методи:
        - list (GET /cart/): Отримати список товарів у кошику
        - create (POST /cart/): Додати товар до кошика
        - update (PUT /cart/{id}/): Оновити кількість товару в кошику або видалити його
        - destroy (DELETE /cart/{id}/): Видалити товар з кошика

    Робота з кошиком:
        - Для авторизованих користувачів кошик прив'язаний до облікового запису.
        - Для анонімних користувачів кошик зберігається на основі сесії.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    permission_classes = [AllowAny]

    def activate_translation(self, request) -> None:
        language = request.headers.get("Accept-Language", "en")
        translation.activate(language)

    def get_cart(self, request):
        """
        Повертає кошик користувача або створює його, якщо відсутній.

        - Авторизований користувач: кошик прив'язується до облікового запису.
        - Анонімний користувач: кошик створюється на основі сесії.

        Returns:
            Cart: Об'єкт кошика користувача.
        """
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
            return cart
        else:
            if settings.CART_SESSION_ID not in request.session:
                request.session[settings.CART_SESSION_ID] = {}
            return request.session[settings.CART_SESSION_ID]

    def list(self, request) -> Response:
        """
        Повертає список товарів у кошику

        :Returns:
            Response:
                - 200 OK: Якщо список товару повернено успішно

        """
        self.activate_translation(request)
        if request.user.is_authenticated:
            cart = self.get_cart(request)
            cart_items = CartItem.objects.filter(cart=cart)
            total_price = cart_items.aggregate(total=Sum("price"))["total"] or 0

            items = [
                {
                    "id": item.product.id,
                    "name": item.product.name,
                    "slug": item.product.slug,
                    "quantity": item.quantity,
                    "price": item.price,
                    "discounted_price": item.product.discounted_price,
                    "main_image": get_main_image_url(request, item.product),
                }
                for item in cart_items
            ]
            response_data = {
                "cart_id": cart.id,
                "total_price": total_price,
                "items": items,
            }
        else:
            session_cart = self.get_cart(request)
            items = []
            total_price = 0
            for product_id_str, data in session_cart.items():
                try:
                    product = Product.objects.get(pk=int(product_id_str))
                    items.append(
                        {
                            "id": product.id,
                            "name": product.name,
                            "slug": product.product.slug,
                            "quantity": data["quantity"],
                            "price": data["price"],
                            "discounted_price": product.discounted_price,
                            "main_image": get_main_image_url(request, product),
                        }
                    )
                    total_price += data["price"] * data["quantity"]
                except Product.DoesNotExist:
                    continue
            response_data = {
                "cart_id": None,
                "total_price": total_price,
                "items": items,
            }
        return Response(response_data, status=status.HTTP_200_OK)

    def create(self, request) -> Response:
        """
        Додає новий товар до кошика користувача або оновлює кількість, якщо товар уже додано.

        :Args:
            - product_id (int): ID товару. (передається у тілі запиту)
            - quantity (int): Кількість товару (за замовчуванням 1). (передається у тілі запиту)

        :Returns:
            Response:
                - 201 CREATED: Якщо товар додано або оновлено у кошику.
                - 400 BAD REQUEST: Якщо передано некоректну кількість товару.
                - 404 NOT FOUND: Якщо товар не знайдено.
        """
        product_id = request.data.get("product_id")
        quantity = request.data.get("quantity", 1)
        if not isinstance(quantity, int) or quantity <= 0:
            return Response(
                {"error": "Quantity must be a positive integer."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        if request.user.is_authenticated:
            cart = self.get_cart(request)
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                product=product,
                defaults={"quantity": quantity, "price": product.price},
            )
            if not created:
                cart_item.quantity += quantity
                cart_item.save()
                message = "Product quantity updated"
            else:
                message = "Product added to cart"
            return Response(
                {"message": message, "quantity": cart_item.quantity},
                status=status.HTTP_201_CREATED,
            )
        else:
            session_cart = self.get_cart(request)
            product_key = str(product_id)
            if product_key in session_cart:
                session_cart[product_key]["quantity"] += quantity
            else:
                session_cart[product_key] = {
                    "quantity": quantity,
                    "price": product.price,
                }
            request.session[settings.CART_SESSION_ID] = session_cart
            return Response(
                {
                    "message": "Product added to cart",
                    "quantity": session_cart[product_key]["quantity"],
                },
                status=status.HTTP_201_CREATED,
            )

    def update(self, request, pk=None) -> Response:
        """Оновлює кількість товару в кошику, ябо видаляє його якщо кількість <= 0.

        :Args:
            - id (int): ID товару, кількість якого потрібно збільшити. (передається у URL)
            - quantity (int): Значення, на яке потрібно змінити кількість товару
            (може бути додатним або від'ємним). (передається у тілі запиту)

        :Returns:
            Response:
                - 200 OK: Якщо кількість товару успішно оновлено.
                - 200 OK: Якщо товар видалено з кошика (при кількості <= 0).
                - 400 BAD REQUEST: Якщо кількість передана некоректно.
                - 404 NOT FOUND: Якщо товар не знайдено у кошику.
        """
        change = request.data.get("quantity", 0)
        if not isinstance(change, int):
            return Response(
                {"error": "Quantity must be an integer."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if request.user.is_authenticated:
            cart = self.get_cart(request)
            try:
                cart_item = CartItem.objects.get(cart=cart, product_id=pk)
            except CartItem.DoesNotExist:
                return Response(
                    {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
                )

            cart_item.quantity += change
            if cart_item.quantity <= 0:
                cart_item.delete()
                return Response(
                    {"message": "Product removed from cart"}, status=status.HTTP_200_OK
                )
            else:
                cart_item.save()
                return Response(
                    {
                        "message": "Product quantity updated",
                        "quantity": cart_item.quantity,
                    },
                    status=status.HTTP_200_OK,
                )
        else:
            session_cart = self.get_cart(request)
            product_key = str(pk)
            if product_key not in session_cart:
                return Response(
                    {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
                )

            session_cart[product_key]["quantity"] += change
            if session_cart[product_key]["quantity"] <= 0:
                del session_cart[product_key]
                message = "Product removed from cart"
            else:
                message = "Product quantity updated"
            request.session[settings.CART_SESSION_ID] = session_cart
            return Response({"message": message}, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None) -> Response:
        """
        Видаляє товар з кошика користувача

        :Args:
            - id (int): ID товару, який потрібно видалити. (передається у URL)

        :Returns:
            Response:
                - 200 OK: Якщо товар успішно видалено з кошика.
                - 404 NOT FOUND: Якщо товар не існує або його немає у кошику.
                - 500 INTERNAL SERVER ERROR: Якщо сталася непередбачена помилка.
        """
        if request.user.is_authenticated:
            cart = self.get_cart(request)
            try:
                cart_item = CartItem.objects.get(cart=cart, product_id=pk)
                cart_item.delete()
                return Response(
                    {"message": "Product removed from cart"}, status=status.HTTP_200_OK
                )
            except CartItem.DoesNotExist:
                return Response(
                    {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
                )
        else:
            session_cart = self.get_cart(request)
            product_key = str(pk)
            if product_key in session_cart:
                del session_cart[product_key]
                request.session[settings.CART_SESSION_ID] = session_cart
                return Response(
                    {"message": "Product removed from cart"}, status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
                )
