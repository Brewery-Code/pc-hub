from os import access
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser


class CustomUserRegistrationSerializer(serializers.ModelSerializer):
    """Серіалізатор для створення нового користувача

    Поля:
        - username: Псевдонім користувача.
        - email: Електронна адреса користувача.
        - password: Пароль користувача.

    """

    class Meta:
        model = CustomUser
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"],
        )

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        return user, access_token, refresh_token


class CustomUserSerializer(serializers.ModelSerializer):
    """Серіалізатор для обробки даних користувача.

    Поля:
        - username: Псевдонім користувача.
        - email: Електронна адреса користувача (тільки для читання).
        - first_name: Ім'я користувача.
        - last_name: Прізвище користувача.
        - phone: Телефон користувача.
        - address: Адреса користувача.
        - photo: Фото профілю користувача.
    """

    class Meta:
        model = CustomUser
        fields = [
            "username",
            "email",
            "first_name",
            "last_name",
            "phone",
            "address",
            "photo",
        ]
        read_only_fields = ["email"]

    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance
