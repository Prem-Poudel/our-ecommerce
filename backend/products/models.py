from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']
    
class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ManyToManyField(Category, related_name='products')
    description = models.TextField(blank=True)
    actual_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    increase_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    image = models.ImageField(upload_to='products/', blank=True)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['stock']
        verbose_name_plural = 'Products'
        verbose_name = 'Product'


