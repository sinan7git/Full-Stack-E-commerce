# Generated by Django 3.2.6 on 2024-03-09 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('codename', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'verbose_name': 'custom permission',
                'verbose_name_plural': 'custom permissions',
            },
        ),
    ]
