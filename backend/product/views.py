from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
from django.utils import translation
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .filters import ProductFilter


class CustomPagination(PageNumberPagination):
    """Клас який реалізує пагінацію"""

    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response(
            {
                "total_items": self.page.paginator.count,
                "total_pages": self.page.paginator.num_pages,
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "results": data,
            }
        )


class CategoryView(ListAPIView):
    """APIView для отримання списку підкатегорій категорії.

    Дозволені операції та HTTP-методи:
        - (GET /categories/{parent_id}/) - Отримання підкатегорій.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    serializer_class = CategorySerializer

    def get_queryset(self):
        """Повертає queryset підкатегорій для категорії"""
        parent_slug = self.kwargs.get("parent_slug")
        return Category.objects.filter(parent__slug=parent_slug).prefetch_related(
            "children"
        )


class TopLevelCategoryView(ListAPIView):
    """APIView для отримання списку всіх категорій.

    Доступні операції:
        - (GET /categories/) - Отримання всіх категорій.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Category.objects.filter(parent=None).prefetch_related("children")
    serializer_class = CategorySerializer


class ProductListView(ListAPIView):
    """APIView для отримання списку продуктів.

    Доступні операції:
        - (GET /products/) - Отримання списку всіх продуктів.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Product.objects.order_by("-created_at")
    serializer_class = ProductListSerializer
    pagination_class = CustomPagination
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter

    # Swagger документація
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "category",
                openapi.IN_QUERY,
                description="Слаг категорії для фільтрації продуктів. Наприклад: `computers` або `accessories`.",
                type=openapi.TYPE_STRING,
            ),
        ]
    )
    def get(self, request, *args, **kwargs):

        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        """Активує переклад на основі заголовку 'Accept-Language'."""
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()


class ProductDetailView(RetrieveAPIView):
    """API View для отримання детальної інформації про продукт.

    Доступні операції:
        - (GET /products/{id}/) - Отримання детальної інформації про продукт за його ID.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = "id"

    def get_queryset(self):
        """Активує переклад на основі заголовку 'Accept-Language'."""
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()


class BrandFilterByCategory(APIView):
    """API View для отримання списку брендів для категорії.

    Доступні операції:
        - (GET /{category_slug}/brands/) - Отримання списку брендів для категорії.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    def get(self, request, category_slug):
        category = Category.objects.filter(slug=category_slug).first()

        if category is None:
            return Response({"error": "Category not found"}, status=404)

        brands = Brand.objects.filter(products__category=category).distinct()

        brand_list = [{"id": brand.id, "name": brand.name} for brand in brands]

        return Response({"brands": brand_list})
