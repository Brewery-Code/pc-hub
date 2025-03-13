from rest_framework import serializers

from product.models import Product
from product.serializers import ProductWishlistSerializer
from .models import Partner, Banner, Review, Wishlist, WishlistItem


class PartnerSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі Partner"""

    class Meta:
        model = Partner
        fields = ["title", "image"]


class BannerSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі Banner"""

    class Meta:
        model = Banner
        fields = ["id", "title", "description", "image"]


class ReviewSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі Review"""

    user = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ["user", "content", "rating", "created_at", "reply"]

    def get_user(self, obj):
        """Метод для отримання username та avatar користувача"""

        request = self.context.get("request")
        avatar_url = obj.author.photo.url if obj.author.photo else None

        if avatar_url and request:
            avatar_url = request.build_absolute_uri(avatar_url)
        return {
            "username": obj.author.name + " " + obj.author.surname,
            "avatar": avatar_url,
        }


class WishlistItemSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі WishlistItem"""

    product = ProductWishlistSerializer(read_only=True)

    class Meta:
        model = WishlistItem
        fields = ["product"]


class WishlistSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі Wishlist"""

    items = WishlistItemSerializer(source="items", many=True, read_only=True)

    class Meta:
        model = Wishlist
        fields = ["id", "user", "session_id", "last_accessed", "items"]
