from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from .models import *


# News
@receiver(pre_delete, sender=News)
def delete_product_image(sender, instance, **kwargs) -> None:
    """
    Видаляє зображення новини зі сховища перед видаленням об'єкта News.

    Цей сигнал викликається перед видаленням об'єкта моделі News (`pre_delete`).
    Якщо у новини є прив'язане зображення, воно буде видалене з файлового сховища.

    Args:
        sender (Model): Клас моделі, що викликає сигнал (у цьому випадку News).
        instance (Product): Екземпляр News, який видаляється.
        **kwargs: Додаткові аргументи, передані сигналом.
    """
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)
