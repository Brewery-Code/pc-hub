from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

urlpatterns = [
    path("register/", RegisterCustomUserView.as_view(), name="register_user"),
    path("login/", TokenObtainPairView.as_view(), name="login_user"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh_token"),
    path("me/", CustomUserView.as_view(), name="user_info"),
]