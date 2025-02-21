from django.urls import path
from . import views

urlpatterns = [
    path("categories/", views.TopLevelCategoryView.as_view(), name="category-list"),
    path(
        "categories/<slug:parent_slug>/children/",
        views.CategoryView.as_view(),
        name="category-children",
    ),
    path("products/", views.ProductListView.as_view(), name="all products"),
    path("products/<int:id>/", views.ProductDetailView.as_view(), name="Product"),
]
