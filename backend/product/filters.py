import django
import django_filters
from .models import Product, Category
from django_filters import rest_framework as filters


class ProductCategoryFilter(filters.FilterSet):
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


class ProductFilter(django_filters.FilterSet):
    price_min = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
