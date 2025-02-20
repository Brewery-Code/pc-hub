from django.contrib import admin
from django.forms import ModelForm
from django.urls import reverse
from django.utils.html import format_html
from cart.models import Cart, CartItem


class CartItemInLine(admin.TabularInline):
    """
    Клас який дозволяє відображати та редагувати об'єкти
    безпосередньо на сторінці редагування кошика.
    Відображає у вигляді таблиці з можливістю редагування кількості.
    """

    model = CartItem
    extra = 0
    fields = ["product", "quantity", "price"]
    readonly_fields = ["price"]


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    """
    Адмін-інтерфейс для керування кошиками користувачів
    """

    list_display = [
        "__str__",
        "session_id",
        "last_accessed",
        "created_at",
        "total_price",
    ]
    list_filter = ["created_at", "updated_at"]
    search_fields = ["user__name", "session_id"]
    inlines = [CartItemInLine]
    readonly_fields = ["display_total_price"]

    @admin.display(description="Загальна вартість")
    def total_price(self, obj) -> float:
        """Повертає загальну суму товарів в list_display"""
        return obj.total_price()

    @admin.display(description="Загальна вартість")
    def display_total_price(self, obj) -> str:
        """Повертає загальну суму товарів на сторінці кошика"""
        return f"{obj.total_price()} грн"


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    """
    Адмін-інтерфейс для керування товарами в кошику
    """

    list_display = ["__str__", "cart_link", "quantity", "price", "total_price"]
    list_editable = ["quantity"]
    list_filter = ["cart__user", "product"]
    search_fields = ["product__name"]

    @admin.display(description="Кошик")
    def cart_link(self, obj) -> str:
        """Повертає зворотнє посилання на кошик користувача"""
        url = reverse("admin:cart_cart_change", args=[obj.cart.pk])
        return format_html(
            '<a href="{}">Кошик користувача {}</a>', url, obj.cart.user.name
        )

    @admin.display(description="Сума")
    def total_price(self, obj) -> float:
        """Повертає загальну суму одного товару"""
        return obj.quantity * obj.price

    def get_form(self, request, obj=None, **kwargs) -> type[ModelForm]:
        """
        Оновлює ціну товару в адмінці,
        щоб вона відповідала актуальній ціні продукту з бази даних.
        """
        form = super().get_form(request, obj, **kwargs)
        if obj and obj.product:
            obj.price = obj.product.price
        return form
