from django.shortcuts import render
from .serializers import CategorySerializer
from rest_framework import generics
from .models import Category
# Create your views here.
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.root_nodes()
    many=True
    serializer_class = CategorySerializer

