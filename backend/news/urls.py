from django.urls import path
from . import views

urlpatterns = [
    path("", views.NewsListView.as_view(), name="all_news"),
    path("<int:id>/", views.NewsDetailView.as_view(), name="news_detail"),
]
