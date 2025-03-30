from django.urls import path
from . import views

urlpatterns = [
    path("categories/", views.TopLevelCategoryView.as_view(), name="category-list"),
    path(
        "categories/<int:parent_id>/children/",
        views.CategoryView.as_view(),
        name="category-children",
    ),
    path("products/", views.ProductListView.as_view(), name="all products"),
    path("products/<int:id>/", views.ProductDetailView.as_view(), name="Product"),
    path(
        "<int:category_id>/brands/",
        views.BrandFilterByCategory.as_view(),
        name="brands",
    ),
]
