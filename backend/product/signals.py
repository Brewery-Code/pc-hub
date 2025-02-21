from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from .models import *


# ProductImage
@receiver(pre_delete, sender=ProductImage)
def delete_product_image(sender, instance, **kwargs):
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)


# Category
@receiver(pre_delete, sender=Category)
def delete_category_image(sender, instance, **kwargs):
    if instance.image:
        if default_storage.exists(instance.image.name):
            default_storage.delete(instance.image.name)
