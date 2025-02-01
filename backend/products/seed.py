from faker import Faker
from .models import Product, Category
import random

fake = Faker()



def seed():
    Category.objects.all().delete()
    Product.objects.all().delete()
    print("Seeding Data")
    catezories = ["Electronics", "Clothing", "Books", "Home & Kitchen", "Toys", "Beauty", "Sports", "Health", "Automotive", "Grocery"]
    for _ in range(10):
        category = Category.objects.create(
            name= random.choice(catezories),
            description=fake.text()
        )
        for _ in range(10):
            Product.objects.create(
                name=fake.word(),
                category=category,
                description=fake.text(),
                price=fake.random_int(10, 1000),
                stock=fake.random_int(1, 100)
            )
    print("Data Seeded Successfully")
