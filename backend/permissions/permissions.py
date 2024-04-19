from django.contrib.auth.models import Permission

can_manage_items = Permission.objects.create(
    codename='can_manage_items',
    name='Can manage items',
)

can_manage_orders = Permission.objects.create(
    codename='can_manage_orders',
    name='Can manage orders',
)