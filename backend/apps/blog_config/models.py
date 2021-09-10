from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey

# Create your models here.
class Category(MPTTModel):
    name = models.CharField(
        max_length=255,
        verbose_name=_("Category Name"),
        help_text=_("Required and unique"),
        unique=True,
    )

    slug = models.SlugField(
        max_length=255,
        verbose_name=_("Category safe URL"),
        unique=True,
    )

    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="children",
    )

    is_active = models.BooleanField(
        default=True,
    )

    class MPTTMeta:
        order_insertion_by = ["name"]

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def get_absolute_url(self):
        return reverse("store:category_list", args=[self.slug])

    def __str__(self):
        return self.name


class BlogData(models.Model):
    name = models.CharField(_("name"), max_length=50)
    logo = models.ImageField(
        verbose_name=("image"),
        help_text=_("Upload a product image"),
        upload_to="images/logo",
        default="images/logo/default.png",
        null=True,
        blank=True,
    )
    alt_text = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_("Alturnative text"),
        help_text=_("Please add alturnative text"),
    )
    title = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_("Title Site"),
        help_text=_("If you want you can insert a site title"),
    )

    class Meta:
        verbose_name = _("BlogData")
        verbose_name_plural = _("BlogDatas")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("BlogData_detail", kwargs={"pk": self.pk})


class AboutMe(models.Model):
    name = models.CharField(max_length=255)
    img_perfil = models.ImageField(null=True, blank=True)
    about = models.TextField()
    facebook_url = models.CharField(max_length=255, null=True, blank=True)
    twitter_url = models.CharField(max_length=255, null=True, blank=True)
    instagram_url = models.CharField(max_length=255, null=True, blank=True)
    youtube_url = models.CharField(max_length=255, null=True, blank=True)
    github_url = models.CharField(max_length=255, null=True, blank=True)
    linkedin_url = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = _("AboutMe")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("AboutMe_detail", kwargs={"pk": self.pk})
