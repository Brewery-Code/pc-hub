from django.db import models
from mptt.models import MPTTModel, TreeForeignKey


# Categories
class Category(MPTTModel):
    """Модель для збереження категорій товарів

    Args:
        MPTTModel (Model): Наслідування від класу `MPTTModel`, що надає функціональність для побудови ієрархії категорій.

    Fields:
        name: Ім'я категорії
        parent: Ім'я батьківської категорії
    """

    name = models.CharField(max_length=50, verbose_name="Назва категорії")
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="children",
        verbose_name="Бітьківська категорія",
    )

    class MpttMeta:
        order_insertion_by = ["name"]

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
        db_table = "Category"

    def __str__(self):
        return self.name
