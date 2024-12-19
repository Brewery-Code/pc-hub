from datetime import datetime
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from phonenumber_field.modelfields import PhoneNumberField
from django.core.exceptions import ValidationError


def user_directory_path(instance, filename) -> str:
    today = datetime.now().strftime("%Y-%m-%d")
    return f"user/{today}/{filename}"


def validate_image(image):
    max_size = 5 * 1024 * 1024
    valid_image_types = ["image/jpeg", "image/png", "image/gif"]

    if image.size > max_size:
        raise ValidationError("File size too large. Maximum size is 5MB.")

    if image.content_type not in valid_image_types:
        raise ValidationError(
            "Unsupported file type. Only JPEG, PNG, and GIF are allowed."
        )


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("The email field must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, username, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, verbose_name="Електронна адреса")
    username = models.CharField(max_length=30, unique=True, verbose_name="Псевдонім")
    first_name = models.CharField(max_length=30, blank=True, verbose_name="Ім'я")
    last_name = models.CharField(max_length=30, blank=True, verbose_name="Прізвище")
    phone = PhoneNumberField(blank=True, verbose_name="Номер телефону")
    address = models.TextField(max_length=200, verbose_name="Адреса доставки")
    photo = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True,
        verbose_name="Фото профілю",
        validators=[validate_image],
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    last_login = models.DateTimeField(auto_now=True, verbose_name="Останній вхід")
    is_active = models.BooleanField(default=True, verbose_name="Активний")
    is_staff = models.BooleanField(default=False, verbose_name="Персонал")
    is_superuser = models.BooleanField(default=False, verbose_name="Адміністратор")
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

    class Meta:
        verbose_name = "Користувач"
        verbose_name_plural = "Користувачі"
        ordering = ["-created_at"]
        db_table = "User"
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["username"]),
        ]
