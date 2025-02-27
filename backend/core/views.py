from rest_framework.generics import ListAPIView
from .models import *
from .serializers import PartnerSerializer
from .models import *
from .serializers import *
from django.utils import translation


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
