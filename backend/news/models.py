from django.db import models
from django.utils import timezone
from django.urls import reverse


class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=News.Status.PUBLISHED)


class News(models.Model):
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

    class Meta:
        ordering = ["-publish"]
        indexes = [models.Index(fields=["-publish"])]
        db_table = "News"
        verbose_name = "Новини"
        verbose_name_plural = "Новина"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse(
            "news:news_detail",
            args=[self.id],
        )
