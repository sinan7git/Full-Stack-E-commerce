from rest_framework import serializers
from ecommerce.models import Products, NewArrival, BestSeller


class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Products
        fields = ("id", "image", "name", "category", "price","old_price")

    def get_category(self, instance):
        return instance.category.name


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Products
        fields = ("id", "image", "name", "category", "description","review","old_price","price")

    def get_category(self, instance):
        return instance.category.name


class NewArrivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewArrival
        fields = ("id", "image", "name", "old_price", "price")


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ("id", "image", "name", "category", "description","old_price", "price")


class BestSellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BestSeller
        fields = ("id", "image", "name", "old_price", "price")

        