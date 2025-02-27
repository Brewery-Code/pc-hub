from modeltranslation.translator import register, TranslationOptions
from .models import Banner


@register(Banner)
class BannerTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі Banner для перекладу.
    """

    fields = ("title", "description")
