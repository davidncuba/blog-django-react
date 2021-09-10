from rest_framework import serializers
from .models import Post
from apps.blog_config.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "is_active"]


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "content",
            "category",
            "slug",
            "create_at",
            "views",
            "read_time",
            "picture",
        )
