from django.conf import settings
from django.middleware import csrf
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer,
)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import CustomUserRegistrationSerializer, CustomUserSerializer
from cart.models import Cart, CartItem


class RegisterCustomUserView(APIView):
    """APIView для реєстрації користувача.

    Дозволені операції та HTTP-методи:
        - (POST /users/register/): Реєстрація нового користувача.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    permission_classes = [AllowAny]

    def post(self, request):
        """Реєструє нового користувача на основі отриманих даних.

        :Args:
            - name (str): Ім'я користувача. (передається у тілі запиту)
            - email (str): Електронна адреса користувача. (передається у тілі запиту)
            - password (str): Пароль користувача. (передається у тілі запиту)

        :Returns:
            Response:
                - 201 CREATED: Якщо користувач створений успішно
                - 400 BAD REQUEST: Некоректний запит
        """

        serializer = CustomUserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user, access_token, refresh_token = serializer.save()

            session_id = request.session.session_key
            anonymous_cart = Cart.objects.filter(
                session_id=session_id, user=None
            ).first()
            if anonymous_cart:
                user_cart, created = Cart.objects.get_or_create(user=user)
                for item in anonymous_cart.cartitem_set.all():
                    CartItem.objects.create(
                        cart=user_cart, product=item.product, quantity=item.quantity
                    )
                anonymous_cart.delete()

            response = Response(
                {
                    "message": "User registered successfully",
                    "access": access_token,
                    "data": {
                        "name": user.name,
                        "email": user.email,
                    },
                },
                status=status.HTTP_201_CREATED,
            )
            response.set_cookie(
                key="refresh_token",
                value=refresh_token,
                expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                httponly=True,
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
            )
            csrf.get_token(request)
            return response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RefreshTokenView(APIView):
    """Перевизначення класу TokenRefreshView для використання HTTP only до refresh_token"""

    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.COOKIES.get("refresh_token")
        if not refresh_token:
            return Response(
                {"error": "Refresh token is missing"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = TokenRefreshSerializer(data={"refresh": refresh_token})

        try:
            serializer.is_valid(raise_exception=True)
        except InvalidToken as e:
            print("InvalidToken:", e)
            return Response({"error": "Invalid refresh token"}, status=401)

        data = serializer.validated_data
        access = data["access"]
        new_refresh = data.get("refresh", refresh_token)

        response = Response({"access": access}, status=200)

        response.set_cookie(
            key="refresh_token",
            value=new_refresh,
            expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            httponly=True,
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )

        return response


class CustomUserView(APIView):
    """API View для роботи з даними користувача.

    Дозволені операції та HTTP-методи:
        - (GET /users/me/): Отримання даних користувача.
        - (PATCH /users/me): Оновлення частини даних користувача.
        - (DELETE /users/me/): Видалення акаунту користувача.

    Доступ:
        - Доступний тільки для авторизованих користувачів (IsAuthenticated)
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        """
        Повертає дані про поточного користувача

        :Returns:
            Response:
                - 200 OK: Якщо інформація повернута успішно.
        """

        user = request.user

        return Response(
            {
                "email": user.email,
                "name": user.name,
                "surname": user.surname,
                "phone": user.phone,
                "photo": (
                    request.build_absolute_uri(user.photo.url) if user.photo else None
                ),
            },
            status=status.HTTP_200_OK,
        )

    def patch(self, request):
        """Оновлює частину даних користувача.

        Args:
            - Поля, що потрібно оновити (наприклад, email, phone). (передається в тілі запиту)

        :Returns:
            Response:
                - 200 OK: Якщо дані користувача оновлені успішно.

        """

        serializer = CustomUserSerializer(request.user, data=request.data, partial=True)

        if serializer.is_valid():
            updated_user = serializer.save()

            updated_data = {
                field: str(getattr(updated_user, field))
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
        """
        Видаляє акаунт поточного користувача після перевірки пароля.

        Параметри запиту:
            - password (str): Пароль для підтвердження видалення акаунту. (передається в тілі запиту)

        :Returns:
            Response:
                - 400 BAD REQUEST: Некоректний запит (Не вказано пароль).
                - 401 NOT UNAUTHORIZED: Неправильний пароль.
                - 204 NO CONTENT: Акаунт користувача успішно видалено
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


class LoginView(TokenObtainPairView):
    """APIView для авторизації користувача.

    Дозволені операції та HTTP-методи:
        - (POST /users/login/): авторизація користувача

    Параметри запиту: (В тілі)
        - email (str): Електронна адреса існуючого користувача.
        - password (str): Пароль існуючого користувача.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    permission_classes = [AllowAny]
    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            return Response({"error": "Invalid credentials"}, status=401)

        data = serializer.validated_data
        access = data["access"]
        refresh = data["refresh"]

        response = Response({"access": access}, status=status.HTTP_200_OK)

        response.set_cookie(
            key="refresh_token",
            value=refresh,
            expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            httponly=True,
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )

        return response
