from rest_framework import serializers
from .models import Category


# Categories
class CategorySerializer(serializers.ModelSerializer):
    """Серіалізатор для категорій товарів

    Атрибути:
        children (list): Список підкатегорій, що належать поточній категорії. Підкатегорії серіалізуються за допомогою рекурсивного виклику серіалізатора.

    Методи:
        get_children (function): Метод для отримання підкатегорій поточної категорії.
    """

    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["id", "name", "children"]

    def get_children(self, obj):
        children = Category.objects.filter(parent=obj)
        if children.exists():
            return CategorySerializer(children, many=True).data
        return []
