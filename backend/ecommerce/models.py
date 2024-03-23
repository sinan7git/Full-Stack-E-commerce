from django.db import models
from django.contrib.auth.models import User


class Products(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="media/products/")
    price = models.FloatField()
    old_price = models.FloatField()
    quantity = models.IntegerField(null=True)
    description = models.TextField()
    review = models.TextField()
    category = models.ForeignKey('Category',on_delete=models.CASCADE,null=True)
    add_cart = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural = 'products'
    
    def __str__(self):
        return self.name
    
    
class Category(models.Model):
    name = models.CharField(max_length=255)
    
    class Meta:
        db_table = "products_category"
    verbose_name_plural = 'categories'
    
    def __str__(self):
        return self.name
    
    
class NewArrival(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="media/new/")
    price = models.FloatField()
    old_price = models.FloatField()
    
    def __str__(self):
        return self.name

    
class BestSeller(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="media/best/")
    price = models.FloatField()
    old_price = models.FloatField()
    
    def __str__(self):
        return self.name
    

class User(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    items = models.ManyToManyField(Products)

    class Meta:
        permissions = (
            ('can_manage_items', 'Can manage items'),
            ('can_manage_orders', 'Can manage orders'),
        )