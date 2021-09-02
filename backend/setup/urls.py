from django.contrib import admin
from django.urls import path
from django.urls.conf import include, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include(("apps.blog_config.urls", 'blog_config'), namespace='blog_config')),
    
]
