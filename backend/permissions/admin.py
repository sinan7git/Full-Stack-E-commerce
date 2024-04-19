# admin.py

from django.contrib import admin
from .models import CustomPermission


class CustomPermissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'codename']
    list_filter = ['name', 'codename']
    search_fields = ['name', 'codename']


admin.site.register(CustomPermission, CustomPermissionAdmin)
