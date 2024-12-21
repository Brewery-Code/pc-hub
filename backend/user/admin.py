from django.contrib import admin
from .models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ("name", "last_login", "email", "is_active", "is_staff")
    list_display_links = ("name", "email", "is_active")
    search_fields = ("name", "surname", "email")
    list_filter = ("is_active", "is_staff")


admin.site.register(CustomUser, CustomUserAdmin)
