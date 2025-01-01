from pyexpat import model
from rest_framework import serializers
from .models import *


# Categories
class CategorySerializer(serializers.ModelSerializer):
    """Серіалізатор для підкатегорій товарів

    Атрибути:
        children (list): Список підкатегорій, що належать поточній категорії. Підкатегорії серіалізуються за допомогою рекурсивного виклику серіалізатора.
    """

    children = serializers.SerializerMethodField()
    is_new = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["id", "name", "image", "is_new", "children"]

    def get_children(self, obj):
        """Метод для отримання підкатегорій поточної категорії."""
        children = Category.objects.filter(parent=obj)
        if children.exists():
            return CategorySerializer(children, many=True).data
        return []

    def get_is_new(self, obj):
        return obj.is_new()


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


class ProductListSerializer(serializers.ModelSerializer):
    """Серіалізатор для списку продуктів.

    Використовується для передачі основної інформації про продукти, зокрема головного зображення, назви, ціни та ідентифікатора.

    Атрибути:
        main_image (str): URL головного зображення продукту.

    Методи:
        get_main_image (function): Метод для отримання головного зображення продукту. Якщо головного зображення немає, повертає `None`.
    """

    main_image = serializers.SerializerMethodField()
    categories = CategorySerializer(many=True)

    def get_main_image(self, obj):
        main_image = obj.productimage_set.filter(is_main=True).first()
        if main_image:
            return main_image.image.url
        return None

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "main_image",
            "categories",
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
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
    name = serializers.CharField()
    description = serializers.CharField()
    images = ProductImageSerializer(source="productimage_set", many=True)

    def get_category(self, obj):
        """Метод для отримання всіх категорій товару (множинні категорії)"""
        categories = obj.categories.all()
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
            "attributes",
            "images",
        ]


class BannerSerializer(serializers.ModelSerializer):
    """Серіалізатор для моделі банерів"""

    class Meta:
        model = Banner
        fields = ["title", "description", "image"]
