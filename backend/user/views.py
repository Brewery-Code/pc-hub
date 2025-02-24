from functools import partial
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserRegistrationSerializer, CustomUserSerializer
from rest_framework.decorators import permission_classes
from cart.models import Cart, CartItem


class RegisterCustomUserView(APIView):
    """APIView для реєстрації користувача.

    Дозволені операції та HTTP-методи:
        - (POST /users/register/): Реєстрація нового користувача.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    @permission_classes([AllowAny])
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

            return Response(
                {
                    "message": "User registered successfully",
                    "access": access_token,
                    "refresh": refresh_token,
                    "data": {
                        "name": user.name,
                        "email": user.email,
                    },
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
                "address": user.address,
                "photo": user.photo.url if user.photo else None,
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
