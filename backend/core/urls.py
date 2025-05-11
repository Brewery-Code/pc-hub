from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"wishlist", views.WishlistViewSet, basename="wishlist")

urlpatterns = [
    path("partners/", views.PartnerApiView.as_view(), name="partners"),
    path("banners/", views.BannerView.as_view(), name="banners"),
    path("reviews/", views.ReviewAPIView.as_view(), name="reviews"),
    path("", include(router.urls)),
]
