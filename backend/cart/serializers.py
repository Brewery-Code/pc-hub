from rest_framework import serializers

from cart.models import CartItem


class CartItemSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі CartItem"""

    class Meta:
        model = CartItem
        fields = ["__all__"]
