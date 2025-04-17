from rest_framework import serializers
from .models import DeliveryOption


class DeliveryOptionSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі DeliveryOption"""

    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        request = self.context.get("request")
        if request and obj.image:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url if obj.image else None

    class Meta:
        model = DeliveryOption
        fields = ["name", "free_from", "image"]
