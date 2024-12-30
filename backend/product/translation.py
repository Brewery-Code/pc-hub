from modeltranslation.translator import translator, TranslationOptions
from .models import *


class ProductTranslationOptions(TranslationOptions):
    fields = ("name", "description")


class CategoryTranslationOptions(TranslationOptions):
    fields = ("name",)


class AttributeTranslationOptions(TranslationOptions):
    fields = ("name",)


class BannerTranslationOptions(TranslationOptions):
    fields = ("title", "description")


translator.register(Product, ProductTranslationOptions)
translator.register(Category, CategoryTranslationOptions)
translator.register(Attribute, AttributeTranslationOptions)
translator.register(Banner, BannerTranslationOptions)
