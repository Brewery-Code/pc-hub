from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from cart.models import Cart, CartItem
from django.utils import translation
from product.models import Product
from rest_framework import status
from django.db.models import Sum


def get_main_image_url(request, product):
    """Метод для отримання абсолютного URL головного зображення товару.

    Args:
        request (HttpRequest): Поточний запит.
        product (Product): Об'єкт товару.

    """
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

    def get_cart(self, request) -> Cart:
        """
        Повертає кошик користувача або створює його, якщо відсутній.

        - Авторизований користувач: кошик прив'язується до облікового запису.
        - Анонімний користувач: кошик створюється на основі сесії.

        Returns:
            Cart: Об'єкт кошика користувача.
        """
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
        else:
            session_key = request.session.session_key
            if not session_key:
                request.session.create()
                session_key = request.session.session_key

            cart, created = Cart.objects.get_or_create(session_id=session_key)

        return cart

    def activate_translation(self, request) -> None:
        """Активує переклад на основі заголовку 'Accept-Language'."""
        language = request.headers.get("Accept-Language", "en")
        translation.activate(language)

    def list(self, request) -> Response:
        """
        Повертає список товарів у кошику

        :Returns:
            Response:
                - 200 OK: Якщо список товару повернено успішно

        """
        self.activate_translation(request)
        cart = self.get_cart(request)
        cart_items = CartItem.objects.filter(cart=cart)
        total_price = cart_items.aggregate(total=Sum("price"))["total"] or 0

        response_data = {
            "cart_id": cart.id,
            "total_price": total_price,
            "items": [
                {
                    "product_id": item.product.id,
                    "product_name": item.product.name,
                    "quantity": item.quantity,
                    "price": item.price,
                    "main_image_url": get_main_image_url(request, item.product),
                }
                for item in cart_items
            ],
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
        cart = self.get_cart(request)
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

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={"quantity": quantity, "price": product.price},
        )

        if not created:
            cart_item.quantity += quantity
            cart_item.save()
            return Response(
                {"message": "Product quantity updated", "quantity": cart_item.quantity},
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"message": "Product added to cart", "quantity": cart_item.quantity},
                status=status.HTTP_201_CREATED,
            )

    def update(self, request, id=None) -> Response:
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
        cart = self.get_cart(request)

        try:
            cart_item = CartItem.objects.get(cart=cart, product_id=id)
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
            )

        change = request.data.get("quantity", 0)

        if not isinstance(change, int):
            return Response(
                {"error": "Quantity must be an integer."},
                status=status.HTTP_400_BAD_REQUEST,
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
                {"message": "Product quantity updated", "quantity": cart_item.quantity},
                status=status.HTTP_200_OK,
            )

    def destroy(self, request, id=None) -> Response:
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
        cart = self.get_cart(request)

        try:
            product = Product.objects.get(pk=id)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
            cart_item.delete()
            return Response(
                {"message": "Product removed from cart"}, status=status.HTTP_200_OK
            )
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Product not in cart"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
