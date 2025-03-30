from pyexpat import model
from rest_framework import serializers

from orders.serializers import DeliveryOptionSerializer
from .models import *
from django.conf import settings
from datetime import timedelta
import pytz
from django.utils import timezone


# Categories
class CategorySerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі Category"""

    children = serializers.SerializerMethodField()
    is_new = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["id", "name", "slug", "image", "is_new", "parent", "children"]

    def get_children(self, obj):
        """Повертає список підкатегорій"""
        children = Category.objects.filter(parent=obj)
        if children.exists():
            return CategorySerializer(children, many=True, context=self.context).data
        return []

    def get_is_new(self, obj) -> bool:
        """Повретає прапорець чи категорія нова"""
        return obj.is_new if isinstance(obj.is_new, bool) else bool(obj.is_new())

    def get_image(self, obj):
        """Повертає абсолютний URL до зображення"""
        request = self.context.get("request")
        if obj.image:
            return (
                request.build_absolute_uri(obj.image.url)
                if request
                else f"{settings.MEDIA_URL}{obj.image.url}"
            )
        return None


# Products
class ProductAttributeSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі ProductAttribute."""

    attribute_name = serializers.CharField(source="attribute.name")

    class Meta:
        model = ProductAttribute
        fields = ["attribute_name", "value"]


class ProductImageSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі ProductImage."""

    class Meta:
        model = ProductImage
        fields = ["image"]


class ProductSerializer(serializers.ModelSerializer):
    """Серіалізатор для серіалізації полів is_new та discounted_price"""

    is_new = serializers.SerializerMethodField()
    brand = serializers.CharField(source="brand.name", read_only=True)
    in_stock = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()

    def get_is_new(self, obj):
        """Перевірка чи об'єкт новий"""
        return obj.is_new()

    def get_in_stock(self, obj) -> bool:
        """Метод для отримання булевого значення наявності товару"""
        return True if obj.stock_quantity else False

    def get_price(self, obj):
        return obj.get_rounded_price()


class ProductListSerializer(ProductSerializer):
    """Серіалізатор для моделі Product.

    Використовується для передачі основної інформації про продукти, зокрема головного зображення, назви, ціни та ідентифікатора.
    """

    main_image = serializers.SerializerMethodField()
    in_stock = serializers.SerializerMethodField()

    def get_main_image(self, obj):
        """Повертає основне зображення товару"""
        request = self.context.get("request")
        main_image = obj.productimage_set.filter(is_main=True).first()
        if main_image and request:
            return request.build_absolute_uri(main_image.image.url)
        return None

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "brand",
            "description",
            "price",
            "discounted_price",
            "rating",
            "main_image",
            "is_new",
            "in_stock",
        ]


class ProductDetailSerializer(ProductSerializer):
    """Серіалізатор для моделі Product з коментарями та доставкою"""

    attributes = ProductAttributeSerializer(source="productattribute_set", many=True)
    category = serializers.SerializerMethodField()
    images = ProductImageSerializer(source="productimage_set", many=True)
    estimated_shipping_time = serializers.SerializerMethodField()
    delivery_options = DeliveryOptionSerializer(many=True)

    def get_category(self, obj):
        """Отримує всі категорії товару"""
        categories = obj.category.all()
        hierarchy = []
        for category in categories:
            category_hierarchy = []
            while category:
                category_hierarchy.insert(0, category.name)
                category = category.parent
            hierarchy.append(category_hierarchy)
        return hierarchy

    def get_estimated_shipping_time(self, obj):
        """Розраховує, коли буде відправка товару"""
        kyiv_tz = pytz.timezone("Europe/Kyiv")
        now = timezone.now().astimezone(kyiv_tz)

        if now.weekday() in [5, 6]:
            days_to_monday = 7 - now.weekday()
            return (now + timedelta(days=days_to_monday)).date()

        if 9 <= now.hour < 18:
            return now.date()
        elif 18 <= now.hour < 24:
            next_day = now + timedelta(days=1)
            if next_day.weekday() in [5, 6]:
                days_to_monday = 7 - next_day.weekday()
                return (now + timedelta(days=days_to_monday)).date()
            return next_day.date()

        return None

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "brand",
            "category",
            "description",
            "price",
            "discounted_price",
            "rating",
            "attributes",
            "images",
            "is_new",
            "in_stock",
            "warranty",
            "estimated_shipping_time",
            "delivery_options",
        ]


class ProductWishlistSerializer(ProductSerializer):
    """Серіалізатор для повернення даних продукту у Wishlist"""

    main_image = serializers.SerializerMethodField()
    attributes = ProductAttributeSerializer(source="productattribute_set", many=True)
    is_new = serializers.SerializerMethodField()
    discounted_price = serializers.FloatField(read_only=True)

    def get_main_image(self, obj):
        """Повертає основне зображення товару"""
        request = self.context.get("request")
        main_image = obj.productimage_set.filter(is_main=True).first()
        if main_image and request:
            return request.build_absolute_uri(main_image.image.url)
        return None

    def get_is_new(self, obj):
        """Перевірка чи об'єкт новий"""
        return obj.is_new()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "rating",
            "price",
            "discounted_price",
            "attributes",
            "is_new",
            "main_image",
        ]
