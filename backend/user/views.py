from functools import partial
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserRegistrationSerializer, CustomUserSerializer
from rest_framework.decorators import permission_classes


class RegisterCustomUserView(APIView):
    """API View для реєстрації користувача

    Доступні операції:
    - POST /api/v1/users/register/ - Зареєструвати користувача
    """

    @permission_classes([AllowAny])
    def post(self, request):
        """Реєструє нового користувача на основі отриманих даних

        Параметри запиту:
        - username: псевдонім користувача
        - email: електронна адреса користувача
        - password: пароль користувача
        """

        serializer = CustomUserRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            user, access_token, refresh_token = serializer.save()

            return Response(
                {
                    "message": "User registered successfully",
                    "access": access_token,
                    "refresh": refresh_token,
                    "data": {
                        "username": user.username,
                        "email": user.email,
                    },
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomUserView(APIView):
    """API View для роботи з даними користувача.

    Доступні операції:
    - GET api/v1/users/me/ - Отримання даних користувача.
    - PATCH api/v1/users/me/ - Оновлення частини даних користувача.
    - DELETE api/v1/users/me/ - Видалення акаунту користувача.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Отримує дані поточного користувача."""

        user = request.user

        return Response(
            {
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "phone": user.phone,
                "address": user.address,
                "photo": user.photo.url if user.photo else None,
            },
            status=status.HTTP_200_OK,
        )

    def patch(self, request):
        """Оновлює частину даних користувача.

        Параметри запиту:
            - Поля, що потрібно оновити (наприклад, email, phone).
        """

        serializer = CustomUserSerializer(request.user, data=request.data, partial=True)

        if serializer.is_valid():
            updated_user = serializer.save()

            updated_data = {
                field: getattr(updated_user, field)
                for field in serializer.validated_data.keys()
            }

            return Response(
                {
                    "message": "User information partially updated.",
                    "data": updated_data,
                },
                status=status.HTTP_200_OK,
            )

    def delete(self, request):
        """Видаляє акаунт поточного користувача після перевірки пароля.

        Параметри запиту:
            - password: Пароль для підтвердження видалення акаунту.
        """

        user = request.user

        password = request.data.get("password")
        if not password:
            return Response(
                {"detail": "Password is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not user.check_password(password):
            return Response(
                {"detail": "Incorrect password."}, status=status.HTTP_401_UNAUTHORIZED
            )

        user.delete()
        return Response(
            {"message": "User account deleted successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )