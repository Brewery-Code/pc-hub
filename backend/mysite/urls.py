from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from mysite import settings
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Pc-hub API",
        default_version="v1",
        description="Опис апі",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/users/", include("user.urls"), name="users"),
    path("api/v1/", include("product.urls"), name="products"),
    path("api/v1/cart/", include("cart.urls"), name="cart"),
    path("api/v1/core/", include("core.urls"), name="core"),
    path("api/v1/news/", include("news.urls"), name="news"),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL)
