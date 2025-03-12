from rest_framework.generics import ListAPIView
from .models import *
from .serializers import *
from django.utils import translation
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


class PartnerApiView(ListAPIView):
    """
    APIView для відображення списку логотипів партнерських компаній.

    Дозволені операції та HTTP-методи:
        - (GET /core/partners/): Отримати список логотипів партнерських компаній.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


class BannerView(ListAPIView):
    """API View для отримання списку банерів.

    Дозволені операції та HTTP-методи:
        - (GET /core/banners/) - Отримання списку всіх банерів.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

    def get_queryset(self):
        """Активує переклад на основі заголовку 'Accept-Language'."""
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()


class ReviewAPIView(APIView):
    """API View для роботи з відгуками.

    Дозволені операції та HTTP-методи:
        - (GET /core/reviews/) - Отримання списку всіх відгуків.
        - (POST /core/reviews/) - Створення ногово відгука.

    Доступ:
        - GET Доступний для всіх користувачів (AllowAny).
        - POST Доступний тільки для авторизованих користувачів (IsAuthenticated).
    """

    def get(self, request):
        """Отримати всі відгуки"""
        reviews = Review.objects.filter(status=Review.Status.APPROVED)
        serializer = ReviewSerializer(reviews, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Створити новий відгук (але не більше одного на користувача)"""
        if not request.user.is_authenticated:
            return Response(
                {"detail": "Authorization required."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if Review.objects.filter(author=request.user).exists():
            return Response(
                {"detail": "You have already left a review.."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = ReviewSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(
                {"detail": "You have successfully left a review."},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
