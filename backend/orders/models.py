from random import choice
from django.db import models
from product.models import Product
from user.models import CustomUser
from django.utils.translation import gettext_lazy as _


class Order(models.Model):
    """Модель для збереження інформації про замовлення

    Fields:
        product: Товар, до якого належить зображення
        image: Зображення товару
        is_main: Прапорець, чи є це основним зображенням
    """

    class OrderStatus(models.TextChoices):
        PENDING = "pending", _("Pending Payment")
        PAID = "paid", _("Paid")
        PROCESSING = "processing", _("Processing")
        SHIPPED = "shipped", _("Shipped")
        DELIVERED = "delivered", _("Delivered")
        CANCELLED = "cancelled", _("Cancelled")
        RETURNED = "returned", _("Returned")

    class PaymentMethod(models.TextChoices):
        COD = "cod", _("Cash on Delivery")
        ONLINE_CARD = "online_card", _("Online Payment (Card)")
        GOOGLE_PAY = "google_pay", _("Google Pay")

    class DeliveryMethod(models.TextChoices):
        NOVA_POSHTA = "nova_poshta", _("Nova Poshta")
        UKR_POSHTA = "ukr_poshta", _("Ukrposhta")

    user = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Користувач",
    )
    status = models.CharField(
        max_length=20,
        choices=OrderStatus.choices,
        default=OrderStatus.PENDING,
        verbose_name="Статус",
    )
    total_price = models.FloatField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    payment_method = models.CharField(
        max_length=30,
        choices=PaymentMethod.choices,
        default=PaymentMethod.COD,
        verbose_name="Спосіб оплати",
    )
    delivery_address = models.TextField(max_length=150)
    delivery_type = models.CharField(
        max_length=20,
        choices=DeliveryMethod.choices,
        default=DeliveryMethod.NOVA_POSHTA,
        verbose_name="Метод доставки",
    )

    def __str__(self):
        """_summary_

        Returns:
            _type_: _description_
        """
        return f"Order {self.id} - {self.get_status_display()} - {self.get_payment_method_display()} - {self.get_delivery_method_display()}"

    class Meta:
        verbose_name = "Замовлення"
        verbose_name_plural = "Замовлення"
        db_table = "Orders"


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.PROTECT,
        verbose_name="Замовлення",
    )
    product = models.ForeignKey(Product, on_delete=models.PROTECT, verbose_name="Товар")
    quantity = models.PositiveIntegerField(default=0)
    price = models.FloatField(default=0)

    def __str__(self):
        return f"Order {self.order.id}. Product List."

    class Meta:
        verbose_name = "Замовлений товар"
        verbose_name_plural = "Замовлені товари"
        db_table = "OrderItem"


class Payment(models.Model):
    class PaymentStatus(models.TextChoices):
        SUCCESSFULLY = "successfully", _("Successfully")
        FAILED = "failed", _("Failed")
        EXPECTATION = "expectation", _("Expectation")

    order = models.ForeignKey(
        Order, on_delete=models.PROTECT, verbose_name="Замовлення"
    )
    status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.EXPECTATION,
        verbose_name="Статус",
    )
    payment_method = models.CharField(
        max_length=30, choices=Order.PaymentMethod.choices, verbose_name="Спосіб оплати"
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Сума")
    transaction_id = models.CharField(
        max_length=100, unique=True, blank=True, null=True, verbose_name="ID транзакції"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Оновлено")
