from rest_framework import serializers
from .models import Category


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "children",'slug')

class CategorySerializer(serializers.ModelSerializer):
    subcategory = SubCategorySerializer(source="children", many=True, required=False)

    class Meta:
        model = Category
        fields = ['id', 'name','slug','subcategory','is_active']
        



