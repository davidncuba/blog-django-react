from django.contrib import admin
from django.urls import path
from django.urls.conf import include, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "", include(("apps.blog_config.urls", "blog_config"), namespace="blog_config")
    ),
    path("post/", include(("apps.posts.urls", "posts"), namespace="posts")),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
