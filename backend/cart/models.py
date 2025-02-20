from django.db import models
from user.models import CustomUser
from product.models import Product
from django.utils.timezone import now
from django.contrib import admin


class Cart(models.Model):
    """
    Модель для збереження інформації про кошик користувача

    Атрибути:
        user (User): Користувач, якому належить кошик
        created_at (datetime): Дата створення кошика
        updated_at (datetime): Дата останнього оновлення
        session_id (str): Сесія анонімного користувача
        last_accessed (datetime): Останній вхід анонімного користувача

    """

    user = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Користувач",
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="Дата останнього оновлення"
    )
    session_id = models.CharField(
        max_length=255, null=True, blank=True, unique=True, verbose_name="Сесія"
    )
    last_accessed = models.DateTimeField(default=now, verbose_name="Останній вхід")

    @admin.display(description="Загальна вартість")
    def total_price(self) -> float:
        """Повертає суму загальної вартості товарів"""
        return sum(item.price * item.quantity for item in self.cartitem_set.all())

    def update_access_time(self) -> None:
        """Оновлює дату останнього входу (для анонімного користувача)"""
        self.last_accessed = now()
        self.save()

    def __str__(self) -> str:
        """Повертає рядкове представлення кошика."""
        return (
            f"Кошик користувача {self.user.name}"
            if self.user
            else "Кошик анонімного користувача"
        )

    class Meta:
        verbose_name = "Кошик"
        verbose_name_plural = "Кошики"
        db_table = "Cart"
        indexes = [models.Index(fields=["user"])]


class CartItem(models.Model):
    """
    Модель для збереження інформації про товари в кошику користувача

    Атрибути:
        cart (Cart): Кошик, в який додано товар
        product (Product): Товар, який додано в кошик
        quantity (int): Кількість товару доданого в кошик
        price (float): Ціна товару на момент додавання до кошика
    """

    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, verbose_name="Кошик користувача"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Товар")
    quantity = models.PositiveIntegerField(verbose_name="Кількість товару", default=1)
    price = models.FloatField(default=0, verbose_name="Ціна товару", editable=False)

    def save(self, *args, **kwargs) -> None:
        """
        Оновлює ціну товару для поля price при збереженні.

        Якщо ціна відсутня або змінено товар, встановлюється актуальна ціна з моделі Product.
        """
        if not self.price or self.price != self.product.price:
            self.price = self.product.price
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        """Повертає рядкове представлення товару в кошику"""
        user_name = self.cart.user.name if self.cart.user else "Анонімний користувач"
        short_name = str(self.product)[:30] + (
            "..." if len(str(self.product)) > 30 else ""
        )
        return f"Товар '{short_name}' в кошику користувача {user_name}"

    class Meta:
        verbose_name = "Товар в кошику"
        verbose_name_plural = "Товари в кошику"
        db_table = "CartItem"
        indexes = [models.Index(fields=["product"])]
