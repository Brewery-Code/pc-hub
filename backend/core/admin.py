from django.contrib import admin

from .models import Partner, Banner
from modeltranslation.admin import TranslationAdmin


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    """
    Адмін-інтерфейс для керування записами про партнерів
    """

    list_display = ["title"]
    search_fields = ["title"]


@admin.register(Banner)
class BannerAdmin(TranslationAdmin):
    """
    Адмін-інтерфейс для керування банерами
    """

    list_display = (
        "title_en",
        "title_uk",
        "description",
        "image",
    )
    fields = ["title_en", "title_uk", "description", "image"]
