from datetime import timedelta
import random
from django.utils.timezone import now
from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
import uuid
from django.utils.text import slugify
import random
import string


class Category(MPTTModel):
    """
    Модель для збереження інформації про категорії

    Атрибути:
        name (str): Назва категорії
        parent (TreeFK): Зворотнє посилання на батьківську категорію (Якщо вона існує)
        image (str): Зображення категорії
        created_at (datetime): Дата створення
        order (int): Порядок відображення категорій
        slug (str): Слаг

    """

    name = models.CharField(max_length=50, verbose_name="Назва категорії")
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="children",
        verbose_name="Батьківська категорія",
    )
    image = models.FileField(
        upload_to="category_images/", verbose_name="Фото товару", null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    order = models.PositiveIntegerField(default=0)
    slug = models.SlugField(
        max_length=60, unique=True, null=True, blank=True, verbose_name="Слаг"
    )

    def save(self, *args, **kwargs) -> None:
        """При збереженні перетворює назву категорії в слаг"""
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def is_new(self) -> bool:
        """Перевірка чи категорія нова"""
        return now() - self.created_at <= timedelta(days=7)

    def __str__(self) -> str:
        """Повертає рядкове представлення категорії"""
        return self.name

    class MpttMeta:
        order_insertion_by = ["name"]

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
        db_table = "Category"
        indexes = [
            models.Index(fields=["parent"]),
        ]


class Product(models.Model):
    """Модель для збереження товарів

    Атрибути:
        name (str): Назва товару
        slug (str): Слаг
        category (Category): Категорія товару, з якою асоціюється продукт
        description (str): Опис товару
        price (float): Ціна товару
        stock_quantity (int): Кількість товару на складі
        discount (int): Знижка на товар у %
        rating (float): Рейтинг товару
        created_at (datetime): Дата створення товару
        updated_at (datetime): Дата останнього оновлення товару
    """

    name = models.CharField(max_length=255, verbose_name="Назва товару")
    slug = models.SlugField(unique=True, blank=True, max_length=150)
    category = models.ManyToManyField(
        Category,
        through="ProductCategory",
        related_name="products",
        verbose_name="Категорії товару",
    )
    description = models.TextField(blank=True, verbose_name="Опис товару")
    price = models.FloatField(verbose_name="Ціна товару")
    stock_quantity = models.PositiveIntegerField(
        default=0, verbose_name="Кількість на складі"
    )
    discount = models.PositiveIntegerField(
        default=0,
        verbose_name="Знижка (%)",
        help_text="Введіть знижку у відсотках (0-100)",
    )
    rating = models.FloatField(default=0.0, verbose_name="Рейтинг")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата оновлення")

    def __str__(self) -> str:
        """Строкове представлення товару"""
        return self.name

    def is_available(self) -> bool:
        """Перевірка наявності товару"""
        return self.stock_quantity > 0

    def is_new(self) -> bool:
        """Перевірка чи товар новий"""
        return now() - self.created_at <= timedelta(days=7)

    @property
    def discounted_price(self) -> float:
        """Розрахунок вартості товару з урахуванням знижки"""
        if self.discount > 0:
            return self.price * (1 - self.discount / 100)
        return self.price

    @property
    def rating(self) -> float:
        """Тимчасовий метод. Генерація рандомного рейтингу для товару"""
        return round(random.uniform(1.0, 5.0), 1)

    def generate_random_string(length=8):
        """Генерує випадковий набір символів та чисел"""
        return "".join(random.choices(string.ascii_lowercase + string.digits, k=length))

    def save(self, *args, **kwargs) -> None:
        """Створює унікальний слаг для товару, додаючи випадковий набір символів в кінець"""
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            while Product.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{self.generate_random_string()}"
            self.slug = slug
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товари"
        db_table = "Product"


class ProductCategory(models.Model):
    """Модель для збереження зв'язку між товарами та категоріями

    Атрибути:
        product (Product): Товар
        category (Category): Категорія
    """

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Категорія товару"
        verbose_name_plural = "Категорії товару"
        db_table = "ProductCategory"
        unique_together = ("product", "category")


class Attribute(models.Model):
    """Модель для збереження атрибутів товарів

    Атрибути:
        name (str): Назва атрибуту

    """

    name = models.CharField(max_length=100, verbose_name="Назва атрибуту")

    def __str__(self) -> str:
        """Строкове представлення атрибуту"""
        return self.name

    class Meta:
        verbose_name = "Атрибут"
        verbose_name_plural = "Атрибути"
        db_table = "Attribute"


class ProductAttribute(models.Model):
    """Модель для збереження зв'язку між товарами та їх атрибутами

    Атрибути:
        product (Product): Товар, до якого належить атрибут
        attribute (Attribute): Атрибут, що описує товар
        value (str): Значення атрибуту
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


class ProductImage(models.Model):
    """Модель для збереження зображень товарів

    Атрибути:
        product (Product): Товар, до якого належить зображення
        image (str): Зображення товару
        is_main (bool): Прапорець, чи є це основним зображенням
    """

    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Товар")
    image = models.ImageField(
        upload_to="product_images/%Y/%m/%d/", verbose_name="Фото товару"
    )
    is_main = models.BooleanField(default=False, verbose_name="Основне фото")

    def save(self, *args, **kwargs) -> None:
        """Збереження зображення з унікальним ім'ям файлу, яке включає ID товару."""
        if not self.image.name:
            self.image.name = f"{self.product.id}_{uuid.uuid4().hex}_{self.image.name}"
        super(ProductImage, self).save(*args, **kwargs)

    def __str__(self) -> str:
        """Строкове представлення зображень товару"""
        return f"Фото для товару {self.product.name} ({'Основне' if self.is_main else 'Додаткове'})"

    class Meta:
        verbose_name = "Фото товару"
        verbose_name_plural = "Фотографії товарів"
        db_table = "ProductImage"
