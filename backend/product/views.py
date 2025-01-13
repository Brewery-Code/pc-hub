from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *
from django.utils import translation


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
        parent_id = self.kwargs.get("parent_id")
        return Category.objects.filter(parent_id=parent_id).prefetch_related("children")


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
    filterset_fields = ["category"]

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


class BannerView(ListAPIView):
    """API View для отримання списку банерів.

    Доступні операції:
    - GET api/v1/banners/ - Отримання списку всіх банерів.

    Відповідь:
    - JSON з даними всіх банерів.
    """

    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

    def get_queryset(self):
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()
