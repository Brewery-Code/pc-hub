# Generated by Django 5.1.4 on 2024-12-26 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_attribute_product_productattribute_productimage_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='stock_quantity',
            field=models.PositiveIntegerField(default=0, verbose_name='Кількість на складі'),
        ),
    ]
