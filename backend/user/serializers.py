from os import access
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser


class CustomUserRegistrationSerializer(serializers.ModelSerializer):
    """Серіалізатор для створення нового користувача

    Поля:
        - name: Ім'я користувача.
        - email: Електронна адреса користувача.
        - password: Пароль користувача.

    """

    class Meta:
        model = CustomUser
        fields = ["name", "email", "password"]

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data["email"],
            name=validated_data["name"],
            password=validated_data["password"],
        )

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        return user, access_token, refresh_token


class CustomUserSerializer(serializers.ModelSerializer):
    """Серіалізатор для обробки даних користувача."""

    class Meta:
        model = CustomUser
        fields = [
            "email",
            "name",
            "surname",
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
