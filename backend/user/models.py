from datetime import datetime
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from phonenumber_field.modelfields import PhoneNumberField
from django.core.exceptions import ValidationError
from PIL import Image


def user_directory_path(instance, filename) -> str:
    """Генерує шлях для файлів, завантажених користувачем, організовуючи їх за датою.

    Args:
        instance (Any): Модель, яка викликає цю функцію.
        filename (str): Назва завантаженого файлу

    Returns:
        str: Згенерований шлях для зберігання файлу
    """
    today = datetime.now().strftime("%Y-%m-%d")
    return f"user/{today}/{filename}"


def validate_image(image):
    """Валідує завантажений файл зображення за розміром та форматом

    Args:
        image (Any): Зображення яке потрібно валідувати

    Raises:
        ValidationError: Розмір файлу завеликий
        ValidationError: Не валідний файл
        ValidationError: Не підтримуваний тип файлу
    """
    max_size = 5 * 1024 * 1024
    valid_image_types = ["image/jpeg", "image/png", "image/gif"]

    if image.size > max_size:
        raise ValidationError("File size too large. Maximum size is 5MB.")

    try:
        img = Image.open(image)
        img.verify()
        image_type = img.format.lower()
    except (IOError, SyntaxError) as e:
        raise ValidationError("File is not a valid image.")

    if f"image/{image_type}" not in valid_image_types:
        raise ValidationError(
            "Unsupported file type. Only JPEG, PNG, and GIF are allowed."
        )


class CustomUserManager(BaseUserManager):
    """Користувацький менеджер для створення користувачів"""

    def create_user(self, email, name, password=None, **extra_fields):
        """Створює користувача та повертає його дані

        Args:
            email (EmailField): Електронна адреса користувача
            username (str): Псевдонім користувача
            password (str): Пароль користувача

        Raises:
            ValueError: Відсутня електронна адреса

        Returns:
            CustomUser: Створений користувач
        """
        if not email:
            raise ValueError("The email field must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        """Створює суперкористувача і повертає його дані

        Args:
            email (EmailField): Електронна адреса користувача
            username (str): Псевдонім користувача
            password (str): Пароль користувача

        Returns:
            CustomUser: Створений суперкористувач
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    Користувацька модель, яка розширює базову модель користувача, додаючи додаткові поля.
    Модель також включає прапорці для активності, персоналу та суперкористувачів.

    Поля:
        email (str): Електронна адреса користувача (унікальна).
        name (str): Ім'я користувача.
        surname (str): Прізвище користувача.
        phone (int): Номер телефону користувача (необов'язково).
        photo (str): Фото профілю користувача (необов'язково).
        created_at (datetime): Дата створення користувача.
        last_login (datetime): Дата останнього входу користувача.
        is_active (bool): Прапорець, який вказує на активність акаунта.
        is_staff (bool): Прапорець, який вказує, чи має користувач права персоналу.
        is_superuser (bool): Прапорець, який вказує, чи є користувач суперкористувачем.
    """

    email = models.EmailField(unique=True, verbose_name="Електронна адреса")
    name = models.CharField(max_length=30, verbose_name="Ім'я")
    surname = models.CharField(max_length=30, blank=True, verbose_name="Прізвище")
    phone = PhoneNumberField(
        unique=True, null=True, blank=True, verbose_name="Номер телефону"
    )
    photo = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True,
        verbose_name="Фото профілю",
        validators=[validate_image],
        default="avatars/default.png",
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата створення")
    last_login = models.DateTimeField(auto_now=True, verbose_name="Останній вхід")
    is_active = models.BooleanField(default=True, verbose_name="Активний")
    is_staff = models.BooleanField(default=False, verbose_name="Персонал")
    is_superuser = models.BooleanField(default=False, verbose_name="Адміністратор")
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self) -> str:
        """Строкове представлення користувача"""
        return f"{self.name} {self.surname}".strip()

    class Meta:
        verbose_name = "Користувач"
        verbose_name_plural = "Користувачі"
        ordering = ["-created_at"]
        db_table = "User"
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["name"]),
        ]
