from urllib import response
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from cart.models import Cart, CartItem
from django.utils import translation
from product.models import Product


def get_main_image_url(request, product):
    """Метод для отримання абсолютного URL головного зображення товару."""
    main_image = product.productimage_set.filter(is_main=True).first()
    if main_image and main_image.image:
        request = request
        return request.build_absolute_uri(main_image.image.url)
    return None


class CartViewSet(ViewSet):
    permission_classes = [AllowAny]

    def get_cart(self, request):
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
                }
                for item in cart_items
            ],
        }

        return Response(response_data)

    def create(self, request):
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

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()
