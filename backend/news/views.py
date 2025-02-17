from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from news.models import News
from news.serializers import NewsSerializer


class NewsListView(ListAPIView):
    queryset = News.published.all()
    serializer_class = NewsSerializer


class NewsDetailView(RetrieveAPIView):
    queryset = News.published.all()
    serializer_class = NewsSerializer
    lookup_field = "id"
