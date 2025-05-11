from django.urls import path
from . import views

urlpatterns = [
    path("categories/", views.TopLevelCategoryView.as_view(), name="category_list"),
    path(
        "categories/<int:parent_id>/children/",
        views.CategoryView.as_view(),
        name="category_children",
    ),
    path("products/", views.ProductListView.as_view(), name="all_products"),
    path(
        "products/<str:identifier>/", views.ProductDetailView.as_view(), name="product"
    ),
    path(
        "<int:category_id>/brands/",
        views.BrandFilterByCategory.as_view(),
        name="brands",
    ),
]
