# Generated by Django 5.1.4 on 2025-01-01 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0011_banner'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='is_parent',
            field=models.BooleanField(default=False),
        ),
    ]