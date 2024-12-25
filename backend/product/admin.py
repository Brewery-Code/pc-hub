from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
    search_fields = ("name",)
    list_per_page = 20


admin.site.register(Category, CategoryAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "created_at", "updated_at")
    search_fields = ("name", "category__name")
    list_filter = ("category", "created_at")
    ordering = ("-created_at",)
    list_per_page = 20


admin.site.register(Product, ProductAdmin)


class AttributeAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
    )
    search_fields = ("name", "category__name")
    list_filter = ("category",)
    ordering = ("name",)
    list_per_page = 20


admin.site.register(Attribute, AttributeAdmin)


class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ("product", "attribute", "value")
    search_fields = ("product__name", "attribute__name", "value")
    list_filter = ("product__category", "attribute__category")
    ordering = ("product", "attribute")
    list_per_page = 20


admin.site.register(ProductAttribute, ProductAttributeAdmin)


class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "image", "is_main")
    search_fields = ("product__name", "image")
    list_filter = ("is_main", "product__category")
    list_per_page = 20


admin.site.register(ProductImage, ProductImageAdmin)
