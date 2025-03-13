from django.db import models
from user.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator
from product.models import Product
from django.utils.timezone import now


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


class Review(models.Model):
    """Модель для зберігання відгуків користувачів

    Атрибути:
        author (CustomUser): Користувач
        content (str): Коментар
        rating (float): Рейтинг
        created_at (datetime): Дата створення
        status (str): Статус
        reply (str): Відповідь адміністрації
    """

    class Status(models.TextChoices):
        PENDING = "PN", "Pending"
        APPROVED = "AP", "Approved"
        REJECTED = "RJ", "Rejected"

    author = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="reviews",
        verbose_name="Користувач",
    )
    content = models.TextField(max_length=300, verbose_name="Коментар")
    rating = models.FloatField(
        validators=[MinValueValidator(1.0), MaxValueValidator(5.0)],
        verbose_name="Оцінка",
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    status = models.CharField(
        max_length=2,
        choices=Status.choices,
        default=Status.PENDING,
        verbose_name="Статус",
    )
    reply = models.TextField(
        null=True, blank=True, verbose_name="Відповідь адміністрації"
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Відгук"
        verbose_name_plural = "Відгуки"
        db_table = "Review"
        constraints = [
            models.UniqueConstraint(fields=["author"], name="unique_review_per_user")
        ]

    def __str__(self):
        return f"Відгук від {self.author} - {self.rating}"


class Wishlist(models.Model):
    """Модель для списку бажаного

    Атрибути:
        user (CustomUser): Користувач
        session_id (str): ID сесії
        last_accessed (datetime): Останній вхід

    """

    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True
    )
    session_id = models.CharField(
        max_length=255, null=True, blank=True, verbose_name="Сесія"
    )
    last_accessed = models.DateTimeField(default=now, verbose_name="Останній вхід")

    class Meta:
        verbose_name = "Список бажаного"
        verbose_name_plural = "Списки бажаного"
        db_table = "Wishlist"


class WishlistItem(models.Model):
    """Модель для збереження товарів в списку бажаного

    Атрибути:
        wishlist (Wishlist): Список бажаного
        product (Product): Продукт
    """

    wishlist = models.ForeignKey(
        Wishlist, on_delete=models.CASCADE, related_name="items"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        unique_together = (
            "wishlist",
            "product",
        )
        db_table = "WishlistItem"
