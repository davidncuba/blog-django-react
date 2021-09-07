from django.shortcuts import render
from .serializers import CategorySerializer, BlogDataSerializer
from rest_framework import generics
from .models import Category, BlogData

# Create your views here.
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.root_nodes()
    many = True
    serializer_class = CategorySerializer


class BlogData(generics.ListCreateAPIView):
    queryset = BlogData.objects.all()
    serializer_class = BlogDataSerializer