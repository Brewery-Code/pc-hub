from django.db import models


class Partner(models.Model):
    """Модель для зберігання партнерських логотипів"""

    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="partners/", verbose_name="Логотип партнера")

    class Meta:
        verbose_name = "Логотип партнера"
        verbose_name_plural = "Логотипи партнерів"
        db_table = "Partner"
