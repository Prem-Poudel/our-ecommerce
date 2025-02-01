from django.urls import path
from . import views

urlpatterns = [
    path("", views.ProductListCreateView.as_view(), name="product-list-create"),
    path("<int:pk>/", views.ProductRetriveUpdateDestroyView.as_view(), name="product-retrive-update-destroy"),
    path("categories/", views.CategoryListView.as_view(), name="category-list"),
    path("categories/<int:pk>/", views.CategoryDetailView.as_view(), name="category-detail"),
]