from modeltranslation.translator import register, TranslationOptions
from .models import *


@register(DeliveryOption)
class ProductTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі DeliveryOption для перекладу.
    """

    fields = ("name",)
