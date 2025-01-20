from random import choice
from django.db import models
from user.models import CustomUser
from django.utils.translation import gettext_lazy as _


class Order(models.Model):
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
        return f"Order {self.id} - {self.get_status_display()} - {self.get_payment_method_display()} - {self.get_delivery_method_display()}"

    class Meta:
        verbose_name = "Замовлення"
        verbose_name_plural = "Замовлення"
        db_table = "Orders"
