from rest_framework import serializers
from .models import Category, BlogData, AboutMe


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "children", "slug")


class CategorySerializer(serializers.ModelSerializer):
    subcategory = SubCategorySerializer(source="children", many=True, required=False)

    class Meta:
        model = Category
        fields = ["id", "name", "slug", "subcategory", "is_active"]


class BlogDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogData
        fields = ["name", "logo", "title", "alt_text"]


class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = [
            "id",
            "name",
            "about",
            "img_perfil",
            "facebook_url",
            "twitter_url",
            "instagram_url",
            "youtube_url",
            "github_url",
            "linkedin_url",
        ]
