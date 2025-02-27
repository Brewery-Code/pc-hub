from rest_framework.generics import ListAPIView, RetrieveAPIView

from news.models import News
from news.serializers import NewsSerializer


class NewsListView(ListAPIView):
    """
    APIView для відображення списку новин.

    Дозволені операції та HTTP-методи:
        - (GET /news/): Отримати список новин.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = News.published.all()
    serializer_class = NewsSerializer


class NewsDetailView(RetrieveAPIView):
    """
    APIView для відображення повної інформації про одну новину.

    Дозволені операції та HTTP-методи:
        - (GET /news/{id}/): Отримати детальну інформацію про новину.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = News.published.all()
    serializer_class = NewsSerializer
    lookup_field = "id"
