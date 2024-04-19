# models.py
from django.db import models


class CustomPermission(models.Model):
    name = models.CharField(max_length=255, unique=True)
    codename = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'custom permission'
        verbose_name_plural = 'custom permissions'

    def __str__(self):
        return self.name
