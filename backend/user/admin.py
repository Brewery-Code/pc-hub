from django.contrib import admin
from .models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "last_login", "is_active", "is_staff")
    list_display_links = ("username", "email", "is_active")
    search_fields = ("username", "first_name", "last_name", "email")
    list_filter = ("is_active", "is_staff")


admin.site.register(CustomUser, CustomUserAdmin)
