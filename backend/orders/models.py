from django.db import models


class DeliveryOption(models.Model):
    """Модель для збереження способів доставки

    Атрибути:
        name (str): Назва товару
        free_from (float): Поріг для безкоштовної доставки
    """

    name = models.CharField(max_length=255)
    free_from = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Тариф доставки"
        verbose_name_plural = "Тарифи доставки"
        db_table = "DeliveryOption"
