from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static

from mysite import settings


urlpatterns = [
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_ROOT, document_root=settings.MEDIA_ROOT)
