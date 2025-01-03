from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.models import Cart, CartItem


class CartView(APIView):
    permission_classes = [AllowAny]

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
                    "quantity": item.quantity,
                    "price": item.price,
                }
                for item in cart_items
            ],
        }
        return Response(response_data)
