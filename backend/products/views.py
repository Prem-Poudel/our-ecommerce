from django.shortcuts import render
from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# category views

class CategoryListView(generics.ListCreateAPIView):
    """
    GET: List all categories
    POST: Create a new category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a category
    PUT: Update a category
    DELETE: Delete a category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# product views

class ProductListCreateView(generics.ListCreateAPIView):
    """
    GET: List all products
    POST: Create a new product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductRetriveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a product
    PUT: Update a product
    DELETE: Delete a product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer