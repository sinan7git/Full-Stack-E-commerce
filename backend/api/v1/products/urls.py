from django.urls import path
from . import views


urlpatterns = [
    path('', views.products),
    path('view/<int:pk>', views.product),
    path('new_arrival/', views.new_arrival),
    path('best_seller/', views.best_seller),
    path("add_cart/<int:pk>",views.add_cart),
    path("dele_cart/<int:pk>",views.delete_cart_item),
    path("add_products/",views.add_products),
    path("cart/",views.cart),
    path('orders/', views.order_list, name='order_list'),
    path('orders/<int:pk>/', views.order_detail, name='order_detail'),
]
