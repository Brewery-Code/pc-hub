from tabnanny import verbose
from django.db import models
from django.template.defaulttags import VerbatimNode
from mptt.models import MPTTModel, TreeForeignKey
import uuid


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
        indexes = [
            models.Index(fields=["parent"]),
        ]

    def __str__(self):
        return self.name


# Products
class Product(models.Model):
    """Модель для збереження товарів

    Args:
        Model (models.Model): Наслідування від класу `models.Model` для збереження товарів.

    Fields:
        name: Назва товару
        category: Категорія товару, з якою асоціюється продукт
        description: Опис товару
        price: Ціна товару
        stock_quantity: Кількість товару на складі
        created_at: Дата створення товару
        updated_at: Дата останнього оновлення товару
    """

    name = models.CharField(max_length=255, verbose_name="Назва товару")
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        verbose_name="Категорія товару",
        related_name="products",
    )
    description = models.TextField(blank=True, verbose_name="Опис товару")
    price = models.FloatField(verbose_name="Ціна товару")
    stock_quantity = models.PositiveIntegerField(
        default=0, verbose_name="Кількість на складі"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата оновлення")

    def __str__(self):
        return self.name

    def is_available(self):
        """Перевірка наявності товару в наявності."""
        return self.stock_quantity > 0

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товари"
        db_table = "Product"
        indexes = [
            models.Index(fields=["category"]),
        ]


# Attributes
class Attribute(models.Model):
    """Модель для збереження атрибутів товарів

    Args:
        Model (models.Model): Наслідування від класу `models.Model` для збереження атрибутів товарів.

    Fields:
        name: Назва атрибуту (наприклад, процесор, відеокарта)
        category: Категорія, до якої належить атрибут
    """

    name = models.CharField(max_length=100, verbose_name="Назва атрибуту")
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, verbose_name="Категорія"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Атрибут"
        verbose_name_plural = "Атрибути"
        db_table = "Attribute"
        indexes = [
            models.Index(fields=["category"]),
        ]


# ProductAttributes
class ProductAttribute(models.Model):
    """Модель для збереження зв'язку між товарами та їх атрибутами

    Args:
        Model (models.Model): Наслідування від класу `models.Model` для збереження атрибутів конкретних товарів.

    Fields:
        product: Товар, до якого належить атрибут
        attribute: Атрибут, що описує товар
        value: Значення атрибуту
    """

    product = models.ForeignKey(
        Product, on_delete=models.PROTECT, verbose_name="ID товару"
    )
    attribute = models.ForeignKey(
        Attribute, on_delete=models.PROTECT, verbose_name="ID атрибуту"
    )
    value = models.TextField(verbose_name="Значення атрибуту")

    class Meta:
        verbose_name = "Атрибут продукту"
        verbose_name_plural = "Атрибути продуктів"
        db_table = "ProductAttribute"
        indexes = [
            models.Index(fields=["product"]),
            models.Index(fields=["attribute"]),
        ]


# ProductImages
class ProductImage(models.Model):
    """Модель для збереження зображень товарів

    Args:
        Model (models.Model): Наслідування від класу `models.Model` для збереження зображень для товарів.

    Fields:
        product: Товар, до якого належить зображення
        image: Зображення товару
        is_main: Прапорець, чи є це основним зображенням
    """

    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Товар")
    image = models.ImageField(
        upload_to="product_images/%Y/%m/%d/", verbose_name="Фото товару"
    )
    is_main = models.BooleanField(default=False, verbose_name="Основне фото")

    def save(self, *args, **kwargs):
        """Збереження зображення з унікальним ім'ям файлу, яке включає ID товару."""
        if not self.image.name:
            self.image.name = f"{self.product.id}_{uuid.uuid4().hex}_{self.image.name}"
        super(ProductImage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Фото товару"
        verbose_name_plural = "Фотографії товарів"
        db_table = "ProductImage"

    def __str__(self):
        return f"Фото для товару {self.product.name} ({'Основне' if self.is_main else 'Додаткове'})"