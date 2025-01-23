from django.urls import path
from . import views

urlpatterns = [
    path("partners/", views.PartnerApiView.as_view(), name="partners"),
]
