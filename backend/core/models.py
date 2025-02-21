from django.db import models


class Partner(models.Model):
    """Модель для зберігання партнерських логотипів

    Атрибути:
        title (str): Назва компанії партнера
        image (str): Логотип компанії партнера
    """

    title = models.CharField(max_length=50, verbose_name="Назва компанії партнера")
    image = models.ImageField(
        upload_to="partners/", verbose_name="Логотип компанії партнера"
    )

    class Meta:
        verbose_name = "Логотип партнера"
        verbose_name_plural = "Логотипи партнерів"
        db_table = "Partner"


# Banners
class Banner(models.Model):
    """Модель для збереження банерів

    Атрибути:
        title (str): Заголовок банера
        description (str): Опис банера
        image (str): Фото банера
    """

    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Опис")
    image = models.ImageField(upload_to="banner_img/", verbose_name="Фото банера")

    class Meta:
        verbose_name = "Банер"
        verbose_name_plural = "Банери"
        db_table = "Banner"
