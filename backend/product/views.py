from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class CategoryView(APIView):
    """API View для роботи з категоріями товарів.

    Доступні операції:
    - GET api/v1/categories/ - Отримання всіх категорій.
    - GET api/v1/categories/parent_id/ - Отримання підкатегорій.
    """

    def get(self, request, parent_id=None):
        if parent_id:
            category = Category.objects.get(id=parent_id)
            children = Category.objects.filter(parent_id=parent_id)
            category_data = CategorySerializer(category).data
            children_data = CategorySerializer(children, many=True).data

            category_data["children"] = children_data
            return Response(category_data)

        else:
            categories = Category.objects.filter(parent=None)
            serializer = CategorySerializer(categories, many=True)
            return Response(serializer.data)


class ProductListView(ListAPIView):
    """API View для отримання списку продуктів.

    Доступні операції:
    - GET api/v1/products/ - Отримання списку всіх продуктів.

    Відповідь:
    - JSON з даними всіх продуктів.
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(RetrieveAPIView):
    """API View для отримання детальної інформації про продукт.

    Доступні операції:
    - GET api/v1/products/{id}/ - Отримання детальної інформації про продукт за його ID.

    Відповідь:
    - JSON з детальною інформацією про продукт.
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "id"
