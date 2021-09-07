from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import Category, BlogData

# Register your models here.

admin.site.register(Category, MPTTModelAdmin)

admin.site.register(BlogData, admin.ModelAdmin)
