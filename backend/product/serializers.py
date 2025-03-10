from pyexpat import model
from rest_framework import serializers
from .models import *
from django.conf import settings


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
    discounted_price = serializers.FloatField(read_only=True)
    brand = serializers.CharField(source="brand.name", read_only=True)

    def get_is_new(self, obj):
        """Перевірка чи об'єкт новий"""
        return obj.is_new()


class ProductListSerializer(ProductSerializer):
    """Серіалізатор для моделі Product.

    Використовується для передачі основної інформації про продукти, зокрема головного зображення, назви, ціни та ідентифікатора.
    """

    main_image = serializers.SerializerMethodField()

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
        ]


class ProductDetailSerializer(ProductSerializer):
    """Серіалізатор для моделі Product.

    Використовується для передачі детальної інформації про продукт, включаючи атрибути, ієрархію категорій, опис, ціну та всі зображення продукту.

    """

    attributes = ProductAttributeSerializer(source="productattribute_set", many=True)
    category = serializers.SerializerMethodField()
    images = ProductImageSerializer(source="productimage_set", many=True)

    def get_category(self, obj):
        """Метод для отримання всіх категорій товару (множинні категорії)"""
        categories = obj.category.all()
        hierarchy = []
        for category in categories:
            category_hierarchy = []
            while category:
                category_hierarchy.insert(0, category.name)
                category = category.parent
            hierarchy.append(category_hierarchy)
        return hierarchy

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
        ]
