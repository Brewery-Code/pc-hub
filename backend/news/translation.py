from modeltranslation.translator import register, TranslationOptions
from .models import News


@register(News)
class NewsTranslationOptions(TranslationOptions):
    """
    Налаштовує поля моделі Product для перекладу.
    """

    fields = (
        "title",
        "content",
    )
