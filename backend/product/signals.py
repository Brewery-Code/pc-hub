from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from .models import *


# ProductImage
@receiver(pre_delete, sender=ProductImage)
def delete_product_image(sender, instance, **kwargs) -> None:
    """
    Видаляє зображення товару зі сховища перед видаленням об'єкта Product.

    Цей сигнал викликається перед видаленням об'єкта моделі Product (`pre_delete`).
    Якщо у продукту є прив'язане зображення, воно буде видалене з файлового сховища.

    Args:
        sender (Model): Клас моделі, що викликає сигнал (у цьому випадку Product).
        instance (Product): Екземпляр Product, який видаляється.
        **kwargs: Додаткові аргументи, передані сигналом.
    """
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)


# Category
@receiver(pre_delete, sender=Category)
def delete_category_image(sender, instance, **kwargs) -> None:
    """
    Видаляє зображення категорії зі сховища перед видаленням об'єкта Category.

    Цей сигнал викликається перед видаленням об'єкта моделі Category (`pre_delete`).
    Якщо у категорії є прив'язане зображення, воно буде видалене з файлового сховища.

    Args:
        sender (Model): Клас моделі, що викликає сигнал (у цьому випадку Category).
        instance (Category): Екземпляр Category, який видаляється.
        **kwargs: Додаткові аргументи, передані сигналом.
    """
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)
