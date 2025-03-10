from typing import LiteralString
from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TranslationAdmin
from .models import *
from .translation import *
from django.utils.html import format_html
from django.urls import reverse


@admin.register(Category)
class CategoryAdmin(TranslationAdmin):
    """Адмін-інтерфейс для керування категоріями"""

    list_display = ("display_full_hierarchy",)
    list_display_links = ("display_full_hierarchy",)
    search_fields = (
        "name",
        "parent__name",
        "parent__parent__name",
        "parent__parent__parent__name",
    )
    list_per_page = 20

    def get_queryset(self, request):
        """Показує всі категорії, але у списку відображає тільки кінцеві вузли."""
        qs = super().get_queryset(request)
        if request.resolver_match.url_name == "category_changelist":
            return qs.filter(children__isnull=True)
        return qs

    @admin.display(description="Ієрархія категорій")
    def display_full_hierarchy(self, obj):
        """Відображає повну ієрархію категорії з посиланнями на редагування."""
        hierarchy = []
        category = obj
        while category:
            url = reverse(
                f"admin:{category._meta.app_label}_{category._meta.model_name}_change",
                args=[category.pk],
            )
            hierarchy.append(f'<a href="{url}">{category.name}</a>')
            category = category.parent
        return format_html(" ----------> ".join(reversed(hierarchy)))


@admin.register(Product)
class ProductAdmin(TranslationAdmin):
    """Адмін-інтерфейс для керування товарами"""

    list_display = ("name", "price", "created_at", "updated_at", "display_categories")
    search_fields = ("name", "category__name")
    list_filter = ("category", "created_at")
    ordering = ("-created_at",)
    list_per_page = 20

    @admin.display(description="Категорії")
    def display_categories(self, obj) -> LiteralString:
        """Відображення категорій для товару в адмін-панелі"""
        return ", ".join([category.name for category in obj.category.all()])


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування категоріями товару"""

    list_display = ("product", "category")
    search_fields = ("product__name", "category__name")
    list_filter = ("category",)
    ordering = ("product", "category")
    list_per_page = 20


@admin.register(Attribute)
class AttributeAdmin(TranslationAdmin):
    """Адмін-інтерфейс для керування атрибутами"""

    list_display = ("name",)
    search_fields = ("name",)
    ordering = ("name",)
    list_per_page = 20


@admin.register(ProductAttribute)
class ProductAttributeAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування атрибутами товару"""

    list_display = ("product", "attribute", "value")
    search_fields = ("product__name", "attribute__name", "value")
    list_filter = ("product__category",)
    ordering = ("product", "attribute")
    list_per_page = 20


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування зображеннями товарів"""

    list_display = ("product", "image", "is_main")
    search_fields = ("product__name", "image")
    list_filter = ("is_main", "product__category")
    list_per_page = 20


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування брендами товарів"""

    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
    list_per_page = 20
