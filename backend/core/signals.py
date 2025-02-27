from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from .models import *


# Banner
@receiver(pre_delete, sender=Banner)
def delete_banner_image(sender, instance, **kwargs) -> None:
    """
    Видаляє зображення банера зі сховища перед видаленням об'єкта Banner.

    Цей сигнал викликається перед видаленням об'єкта моделі Banner (`pre_delete`).
    Якщо у банера є прив'язане зображення, воно буде видалене з файлового сховища.

    Args:
        sender (Model): Клас моделі, що викликає сигнал (у цьому випадку Banner).
        instance (Banner): Екземпляр Banner, який видаляється.
        **kwargs: Додаткові аргументи, передані сигналом.
    """
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)
