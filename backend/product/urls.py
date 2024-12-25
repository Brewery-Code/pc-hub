from django.urls import path
from .views import CategoryView

urlpatterns = [
    path("categories/", CategoryView.as_view(), name="category-list"),
    path(
        "categories/<int:parent_id>/", CategoryView.as_view(), name="category-children"
    ),
]
