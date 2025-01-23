from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import *
from .serializers import PartnerSerializer


class PartnerApiView(ListAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
