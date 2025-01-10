from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from cart.models import Cart, CartItem
from django.utils import translation
from product.models import Product


def get_main_image_url(request, product):
    """Метод для отримання абсолютного URL головного зображення товару.

    Аргументи:
        request (HttpRequest): Поточний запит.
        product (Product): Об'єкт товару.

    """
    main_image = product.productimage_set.filter(is_main=True).first()
    if main_image and main_image.image:
        return request.build_absolute_uri(main_image.image.url)
    return None


class CartViewSet(ViewSet):
    """ViewSet для роботи з кошиком користувача.

    Доступні операції:
    - GET /api/v1/cart/ - Отримання кошика користувача.
    - POST /api/v1/cart/ - Додавання товару до кошика.

    Робота з кошиком:
    - Для авторизованих користувачів кошик прив'язаний до облікового запису.
    - Для анонімних користувачів кошик зберігається на основі сесії.

    """

    permission_classes = [AllowAny]

    def get_cart(self, request):
        """Отримання або створення кошика для поточного користувача або сесії.

        Повертає:
            Cart: Об'єкт кошика.
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

    def list(self, request):
        """Отримання списку товарів у кошику.

        Відповідь:
        - JSON з інформацією про кошик, товари, загальну вартість.
        """
        cart = self.get_cart(request)
        cart_items = CartItem.objects.filter(cart=cart)

        response_data = {
            "cart_id": cart.id,
            "total_price": sum(item.price for item in cart_items),
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

        return Response(response_data)

    def create(self, request):
        """Додавання товару до кошика.

        Аргументи:
        - product_id (int): ID товару. (в тілі запиту)
        - quantity (int): Кількість товару. (в тілі запиту)

        Відповідь:
        - JSON з повідомленням про успішне додавання або помилку.
        """
        cart = self.get_cart(request)
        product_id = request.data.get("product_id")
        quantity = request.data.get("quantity", 1)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={"quantity": quantity, "price": product.price},
        )

        if not created:
            cart_item.quantity += quantity
            cart_item.save()

        return Response({"message": "Product added to cart"})

    def update(self, request, pk=None):
        """Оновлення кількості товару в кошику.

        Аргументи:
        - pk (int): ID товару, кількість якого потрібно збільшити. (у URL)
        - quantity (int): Кількість товару. (в тілі запиту)

        Відповідь:
        - JSON з повідомленням про успішне оновлення кількості товару або помилку.
        """
        cart = self.get_cart(request)

        try:
            cart_item = CartItem.objects.get(cart=cart, product_id=pk)
        except CartItem.DoesNotExist:
            return Response({"error": "Product not in cart"}, status=404)

        change = request.data.get("quantity", 0)

        cart_item.quantity += change

        if cart_item.quantity <= 0:
            cart_item.delete()
            return Response({"message": "Product removed from cart"})
        else:
            cart_item.save()
            return Response(
                {"message": "Product quantity updated", "quantity": cart_item.quantity}
            )

    def destroy(self, request, pk=None):
        """Видалення товару з кошика.

        Аргументи:
        - pk (int): ID товару, який потрібно видалити. (у URL)

        Відповідь:
        - JSON з повідомленням про успішне видалення або помилку.
        """
        cart = self.get_cart(request)

        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)

        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
            cart_item.delete()
            return Response({"message": "Product removed from cart"})
        except CartItem.DoesNotExist:
            return Response({"error": "Product not in cart"}, status=404)
        except Exception as e:
            return Response({"error": f"An error occurred: {str(e)}"}, status=500)

    def get_queryset(self):
        """Активація локалізації відповідно до заголовку запиту.

        Повертає:
            QuerySet: Відфільтровані об'єкти.
        """
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()
