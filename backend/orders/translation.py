from modeltranslation.translator import translator, TranslationOptions
from .models import Order


class OrderTranslationOptions(TranslationOptions):
    fields = (
        "status",
        "payment_method",
        "delivery_type",
    )


translator.register(Order, OrderTranslationOptions)
