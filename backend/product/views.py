from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *
from django.utils import translation
from django_filters import rest_framework as filters
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class ProductFilter(filters.FilterSet):
    """Фільтрація товарів за категорією"""

    category = filters.CharFilter(method="filter_by_category")

    class Meta:
        model = Product
        fields = ["category"]

    def filter_by_category(self, queryset, name, value):
        try:
            category = Category.objects.get(slug=value)
            descendants = category.get_descendants(include_self=True)
            return queryset.filter(category__in=descendants)
        except Category.DoesNotExist:
            return queryset.none()


class StandardResultsSetPagination(PageNumberPagination):
    """Клас який реалізує пагінацію"""

    page_size = 6
    page_size_query_param = "page_size"
    max_page_size = 100


class CategoryView(ListAPIView):
    """API View для роботи з категоріями товарів.

    Доступні операції:
    - GET api/v1/categories/parent_id/ - Отримання підкатегорій.
    """

    serializer_class = CategorySerializer

    def get_queryset(self):
        parent_slug = self.kwargs.get("parent_slug")
        return Category.objects.filter(parent__slug=parent_slug).prefetch_related(
            "children"
        )


class TopLevelCategoryView(ListAPIView):
    """API View для роботи з категоріями товарів.

    Доступні операції:
    - GET api/v1/categories/ - Отримання всіх категорій.
    """

    queryset = Category.objects.filter(parent=None).prefetch_related("children")
    serializer_class = CategorySerializer


class ProductListView(ListAPIView):
    """API View для отримання списку продуктів.

    Доступні операції:
    - GET api/v1/products/ - Отримання списку всіх продуктів.

    Відповідь:
    - JSON з даними всіх продуктів.
    """

    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter

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
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()


class ProductDetailView(RetrieveAPIView):
    """API View для отримання детальної інформації про продукт.

    Доступні операції:
    - GET api/v1/products/{id}/ - Отримання детальної інформації про продукт за його ID.

    Відповідь:
    - JSON з детальною інформацією про продукт.
    """

    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = "id"

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()
