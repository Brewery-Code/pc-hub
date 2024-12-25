from django.urls import path
from . import views

urlpatterns = [
    path("categories/", views.CategoryView.as_view(), name="category-list"),
    path(
        "categories/<int:parent_id>/",
        views.CategoryView.as_view(),
        name="category-children",
    ),
]
