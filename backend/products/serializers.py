from rest_framework import serializers
from .models import Product, Category, SubCategory


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    sub_category = SubCategorySerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'sub_category', 'description', 'actual_price', 'increase_price', 'image', 'stock', 'created_at']