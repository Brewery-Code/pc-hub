from modeltranslation.translator import register, TranslationOptions
from .models import *


@register(Product)
class ProductTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі Product для перекладу.
    """

    fields = ("name", "description")


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі Category для перекладу.
    """

    fields = ("name",)


@register(Attribute)
class AttributeTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі Attribute для перекладу.
    """

    fields = ("name",)
