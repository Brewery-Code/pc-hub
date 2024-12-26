from pyexpat import model
from rest_framework import serializers
from .models import *


# Categories
class CategorySerializer(serializers.ModelSerializer):
    """Серіалізатор для категорій товарів

    Атрибути:
        children (list): Список підкатегорій, що належать поточній категорії. Підкатегорії серіалізуються за допомогою рекурсивного виклику серіалізатора.

    Методи:
        get_children (function): Метод для отримання підкатегорій поточної категорії.
    """

    children = serializers.SerializerMethodField()
    name = serializers.CharField()

    class Meta:
        model = Category
        fields = ["id", "name", "children"]

    def get_children(self, obj):
        """Метод для отримання підкатегорій поточної категорії."""
        children = Category.objects.filter(parent=obj)
        if children.exists():
            return CategorySerializer(children, many=True).data
        return []


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


class ProductSerializer(serializers.ModelSerializer):
    """Серіалізатор для продуктів

    Атрибути:
        attributes (list): Список атрибутів продукту. Використовує серіалізатор `ProductAttributeSerializer`.
        category (list): Ієрархічний список категорій продукту, що включає всі батьківські категорії.

    Методи:
        get_category (function): Метод для побудови ієрархії категорії продукту. Повертає список категорій від батьківської до поточної категорії.
    """

    attributes = ProductAttributeSerializer(source="productattribute_set", many=True)
    category = serializers.SerializerMethodField()
    name = serializers.CharField()
    description = serializers.CharField()

    def get_category(self, obj):
        category = obj.category
        hierarchy = []
        while category:
            hierarchy.insert(0, category.name)
            category = category.parent
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
        ]
