from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from apps.blog_config.models import Category


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.ManyToManyField(Category)
    slug = models.CharField(max_length=255, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)
    views = models.IntegerField(default=0)
    read_time = models.IntegerField(default=0)
    picture = models.ImageField(blank=True, null=True)

    class Meta:
        verbose_name = _("Post")
        verbose_name_plural = _("Posts")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Post_detail", kwargs={"pk": self.pk})
