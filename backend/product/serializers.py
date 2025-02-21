from pyexpat import model
from rest_framework import serializers
from .models import *
from django.conf import settings


# Categories
class CategorySerializer(serializers.ModelSerializer):
    """Серіалізатор для підкатегорій товарів"""

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

    def get_is_new(self, obj):
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
    """Серіалізатор для атрибутів продуктів.

    Атрибути:
        attribute_name (str): Назва атрибуту продукту.
    """

    attribute_name = serializers.CharField(source="attribute.name")

    class Meta:
        model = ProductAttribute
        fields = ["attribute_name", "value"]


class ProductImageSerializer(serializers.ModelSerializer):
    """Серіалізатор для зображень продуктів.

    Серіалізатор використовується для роботи зі зображеннями продуктів, зокрема для передачі URL-адрес зображень.

    Атрибути:
        image (str): URL зображення продукту.
    """

    class Meta:
        model = ProductImage
        fields = ["image"]


class ProductSerializer(serializers.ModelSerializer):
    is_new = serializers.SerializerMethodField()
    discounted_price = serializers.FloatField(read_only=True)

    def get_is_new(self, obj):
        return obj.is_new()


class ProductListSerializer(ProductSerializer):
    """Серіалізатор для списку продуктів.

    Використовується для передачі основної інформації про продукти, зокрема головного зображення, назви, ціни та ідентифікатора.

    Атрибути:
        main_image (str): URL головного зображення продукту.

    Методи:
        get_main_image (function): Метод для отримання головного зображення продукту. Якщо головного зображення немає, повертає `None`.
    """

    main_image = serializers.SerializerMethodField()

    def get_main_image(self, obj):
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
            "description",
            "price",
            "discounted_price",
            "rating",
            "main_image",
            "is_new",
        ]


class ProductDetailSerializer(ProductSerializer):
    """Серіалізатор для деталей продуктів.

    Використовується для передачі детальної інформації про продукт, включаючи атрибути, ієрархію категорій, опис, ціну та всі зображення продукту.

    Атрибути:
        attributes (list): Список атрибутів продукту, серіалізованих за допомогою `ProductAttributeSerializer`.
        category (list): Ієрархічний список категорій продукту (від батьківської до поточної).
        images (list): Список зображень продукту, серіалізованих за допомогою `ProductImageSerializer`.

    Методи:
        get_category (function): Метод для побудови ієрархії категорії продукту.
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
            "category",
            "description",
            "price",
            "discounted_price",
            "rating",
            "attributes",
            "images",
            "is_new",
        ]
