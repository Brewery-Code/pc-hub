# Generated by Django 5.1.4 on 2025-03-13 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_deliveryoption_name_en_deliveryoption_name_uk'),
        ('product', '0002_product_varranty'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='delivery_options',
            field=models.ManyToManyField(blank=True, related_name='products', to='orders.deliveryoption', verbose_name='Способи доставки'),
        ),
    ]
