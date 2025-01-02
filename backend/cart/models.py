from django.db import models
from user.models import CustomUser
from product.models import Product


class Cart(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, verbose_name="Користувач"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="Дата останнього оновлення"
    )

    class Meta:
        verbose_name = "Кошик"
        verbose_name_plural = "Кошики"
        db_table = "Cart"
        indexes = [models.Index(fields=["user"])]


class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, verbose_name="Кошик користувача"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Товар")
    quantity = models.PositiveIntegerField(verbose_name="Кількість товару", default=1)
    price = models.FloatField(verbose_name="Ціна товару", editable=False)

    class Meta:
        verbose_name = "Товар в кошику"
        verbose_name_plural = "Товари в кошику"
        db_table = "CartItem"
        indexes = [models.Index(fields=["product"])]
