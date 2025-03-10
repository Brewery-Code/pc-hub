import django_filters
from .models import Product, Category
from django_filters import rest_framework as filters


class ProductFilter(django_filters.FilterSet):
    """Клас який дозволяє фільтрацію товарів за їх полями"""

    price_min = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    category = django_filters.CharFilter(method="filter_category")
    in_stock = django_filters.BooleanFilter(
        field_name="stock_quantity", method="filter_in_stock"
    )
    brand = django_filters.CharFilter(field_name="brand__slug", lookup_expr="iexact")

    def filter_category(self, queryset, name, value):
        """Фільтрує товари за категорією та всіма її підкатегоріями"""
        try:
            category = Category.objects.get(slug=value)
            subcategories = category.get_descendants(include_self=True)
            return queryset.filter(category__in=subcategories)
        except Category.DoesNotExist:
            return queryset.none()

    def filter_in_stock(self, queryset, name, value):
        if value:
            return queryset.filter(stock_quantity__gt=0)
        return queryset.filter(stock_quantity=0)

    class Meta:
        model = Product
        fields = ["in_stock", "category", "brand"]
