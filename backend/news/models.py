from django.db import models
from django.utils import timezone
from django.urls import reverse
import markdown
from django.utils.safestring import mark_safe


class PublishedManager(models.Manager):
    """
    Кастомний менеджер для витягування всіх новин з статусом Published
    """

    def get_queryset(self):
        return super().get_queryset().filter(status=News.Status.PUBLISHED)


class News(models.Model):
    """Модель для зберігання партнерських логотипів

    Атрибути:
        title (str): Заголовок новини
        content (str): Контент новини
        slug (str): Слаг
        status (str): Статус новини (Published/Draft)
        publish (datetime): Дата публікації
        created (datetime): Дата стоврення
        updated (datetime): Дата оновлення
        objects (Manager): Менеджер
        published (CustomManager): Кастомний менеджер
    """

    class Status(models.TextChoices):
        DRAFT = "DF", "Draft"
        PUBLISHED = "PB", "Published"

    title = models.CharField(max_length=100)
    content = models.TextField()
    slug = models.SlugField(unique=True)
    status = models.CharField(
        max_length=2, choices=Status.choices, default=Status.DRAFT
    )
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    objects = models.Manager()
    published = PublishedManager()
    image = models.ImageField(
        upload_to="news_images/%Y/%m/%d/", verbose_name="Фото новини"
    )

    class Meta:
        ordering = ["-publish"]
        indexes = [models.Index(fields=["-publish"])]
        db_table = "News"
        verbose_name = "Новини"
        verbose_name_plural = "Новина"

    def __str__(self) -> str:
        """Повертає рядкове представлення новини"""
        return self.title

    def get_absolute_url(self) -> str:
        """Повертає абсолютний url новини"""
        return reverse(
            "news:news_detail",
            args=[self.id],
        )

    def get_content_as_html(self):
        """Конвертує markdown текст"""
        return mark_safe(markdown.markdown(self.content)).replace("\n", "")
