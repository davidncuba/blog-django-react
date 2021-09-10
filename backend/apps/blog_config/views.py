from django.shortcuts import render
from .serializers import CategorySerializer, BlogDataSerializer, AboutMeSerializer
from rest_framework import generics
from .models import Category, BlogData, AboutMe

# Create your views here.
class CategoryList(generics.ListAPIView):
    queryset = Category.objects.root_nodes()
    many = True
    serializer_class = CategorySerializer


class BlogData(generics.ListAPIView):
    queryset = BlogData.objects.all()
    serializer_class = BlogDataSerializer


class AboutMe(generics.ListAPIView):
    queryset = AboutMe.objects.all()[:1]
    serializer_class = AboutMeSerializer
