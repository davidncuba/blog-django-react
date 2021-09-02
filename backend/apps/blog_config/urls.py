from django.urls import path
from . import views

urlpatterns = [
    path("category/", views.CategoryList.as_view(), name="whoami"),
]
