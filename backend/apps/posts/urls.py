from django.urls import path
from . import views


urlpatterns = [
    path("", views.PostList.as_view(), name="post_list"),
    path("<int:pk>", views.PostListUpdate.as_view(), name="post_list"),
]
