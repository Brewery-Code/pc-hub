from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TranslationAdmin
from .models import *
from .translation import *
from django.utils.html import format_html
from django.urls import reverse
from django import forms


class CategoryChoiceField(forms.ModelMultipleChoiceField):
    def label_from_instance(self, obj):
        hierarchy = []
        category = obj
        while category:
            hierarchy.append(category.name)
            category = category.parent
        return " → ".join(reversed(hierarchy))


class CategoryAttributeAdminForm(forms.ModelForm):
    category = CategoryChoiceField(
        queryset=Category.objects.all(),
        widget=admin.widgets.FilteredSelectMultiple("Категорії", is_stacked=False),
    )

    class Meta:
        model = CategoryAttribute
        fields = "__all__"


# Кастомна форма для інлайну ProductCategoryInline
class ProductCategoryInlineForm(forms.ModelForm):
    class Meta:
        model = ProductCategory
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["category"].queryset = Category.objects.all()


# Інлайн для категорій товару через проміжну модель із autocomplete
class ProductCategoryInline(admin.TabularInline):
    model = ProductCategory
    form = ProductCategoryInlineForm
    extra = 1
    autocomplete_fields = ["category"]


# Інлайн для атрибутів товару
class ProductAttributeInline(admin.TabularInline):
    model = ProductAttribute
    extra = 1
    autocomplete_fields = ["attribute"]


# Інлайн для зображень товару з попереднім переглядом фото
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="max-height: 100px; max-width: 100px;" />',
                obj.image.url,
            )
        return ""

    image_preview.short_description = "Попередній перегляд"


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
    prepopulated_fields = {"slug": ("name",)}
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
    """Адмін-інтерфейс для керування товарами з розширеним функціоналом"""

    list_display = (
        "id",
        "name",
        "price",
        "created_at",
        "updated_at",
        "display_categories",
    )
    search_fields = ("id", "name", "category__name")
    list_filter = ("category", "created_at")
    ordering = ("-created_at",)
    list_per_page = 20

    inlines = [ProductCategoryInline, ProductAttributeInline, ProductImageInline]
    autocomplete_fields = ["brand"]

    @admin.display(description="Ієрархія категорій")
    def display_categories(self, obj):
        hierarchies = []
        for category in obj.category.all():
            hierarchy = []
            current = category
            while current:
                url = reverse(
                    f"admin:{current._meta.app_label}_{current._meta.model_name}_change",
                    args=[current.pk],
                )
                hierarchy.append(f'<a href="{url}">{current.name}</a>')
                current = current.parent
            hierarchies.append(" → ".join(reversed(hierarchy)))
        return format_html("<br>".join(hierarchies))


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


@admin.register(CategoryAttribute)
class CategoryAttributeAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для атрибутів категорії"""

    form = CategoryAttributeAdminForm
    autocomplete_fields = ["attribute"]

    list_display = ("attribute", "is_filterable")
    list_filter = ("attribute", "category")
    search_fields = ("attribute__name", "category__name")

    @admin.display(description="Категорії")
    def display_categories(self, obj):
        return ", ".join([category.name for category in obj.category.all()])


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування зображеннями товарів"""

    list_display = ("product", "image", "is_main")
    search_fields = ("product__name", "image")
    list_filter = ("is_main", "product__category")
    list_per_page = 20


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    """Адмін-інтерфейс для керування брендами товарів з пошуком"""

    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
    list_per_page = 20
    search_fields = ("name",)
