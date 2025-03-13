from rest_framework import serializers
from .models import DeliveryOption


class DeliveryOptionSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі DeliveryOption"""

    class Meta:
        model = DeliveryOption
        fields = ["name", "free_from"]
