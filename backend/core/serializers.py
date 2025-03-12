from rest_framework import serializers
from .models import Partner, Banner, Review


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
