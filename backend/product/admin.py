from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import *
from .translation import *


class CategoryAdmin(TranslationAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
    search_fields = ("name",)
    list_per_page = 20


admin.site.register(Category, CategoryAdmin)


class ProductAdmin(TranslationAdmin):
    list_display = ("name", "price", "created_at", "updated_at", "display_categories")
    search_fields = ("name", "categories__name")
    list_filter = ("categories", "created_at")
    ordering = ("-created_at",)
    list_per_page = 20

    def display_categories(self, obj):
        return ", ".join([category.name for category in obj.categories.all()])

    display_categories.short_description = "Категорії"


admin.site.register(Product, ProductAdmin)


class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ("product", "category")
    search_fields = ("product__name", "category__name")
    list_filter = ("category",)
    ordering = ("product", "category")
    list_per_page = 20


admin.site.register(ProductCategory, ProductCategoryAdmin)


class AttributeAdmin(TranslationAdmin):
    list_display = ("name",)
    search_fields = ("name",)
    ordering = ("name",)
    list_per_page = 20


admin.site.register(Attribute, AttributeAdmin)


class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ("product", "attribute", "value")
    search_fields = ("product__name", "attribute__name", "value")
    list_filter = ("product__categories",)
    ordering = ("product", "attribute")
    list_per_page = 20


admin.site.register(ProductAttribute, ProductAttributeAdmin)


class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "image", "is_main")
    search_fields = ("product__name", "image")
    list_filter = ("is_main", "product__categories")
    list_per_page = 20


admin.site.register(ProductImage, ProductImageAdmin)


@admin.register(Banner)
class BannerAdmin(TranslationAdmin):
    list_display = (
        "title_en",
        "title_uk",
        "description",
        "image",
    )
    fields = ["title_en", "title_uk", "description", "image"]
