from django.contrib import admin
from .models import *
from modeltranslation.admin import TranslationAdmin


@admin.register(DeliveryOption)
class DeliveryOptionAdmin(TranslationAdmin):
    list_display = [
        "name",
    ]
