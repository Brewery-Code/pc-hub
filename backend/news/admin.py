from django.contrib import admin
from .models import News
from modeltranslation.admin import TranslationAdmin


@admin.register(News)
class PostAdmin(TranslationAdmin):
    """
    Адмін-інтерфейс для керування новинами
    """

    list_display = ["title", "slug", "publish", "status"]
    list_filter = ["status", "created", "publish"]
    search_fields = ["title", "content"]
    prepopulated_fields = {"slug": ("title",)}
    date_hierarchy = "publish"
    ordering = ["status", "publish"]
