from rest_framework import serializers
from .models import Partner, Banner


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
