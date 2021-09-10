from django.urls import path
from . import views


urlpatterns = [
    path("category/", views.CategoryList.as_view(), name="category"),
    path("blog-data/", views.BlogData.as_view(), name="blog-data"),
    path("about-me/", views.AboutMe.as_view(), name="about-me"),
]
