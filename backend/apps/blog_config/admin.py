from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import Category
# Register your models here.

admin.site.register(Category, MPTTModelAdmin)