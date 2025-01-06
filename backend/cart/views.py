from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.models import Cart, CartItem
from cart.serializers import CartItemSerializer
from django.utils import translation


def get_main_image_url(request, product):
    """Метод для отримання абсолютного URL головного зображення товару."""
    main_image = product.productimage_set.filter(is_main=True).first()
    if main_image and main_image.image:
        request = request
        return request.build_absolute_uri(main_image.image.url)
    return None


class CartView(APIView):
    """API View для роботи з кошиком користувача

    Доступні операції:
    - GET api/v1/cart/ - Отримання кошика користувача.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = CartItemSerializer

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
        else:
            return Response("User is not authenticated.")

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

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()
