# Generated by Django 5.1.4 on 2025-01-03 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_cart_session_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='price',
            field=models.FloatField(default=10000, editable=False, verbose_name='Ціна товару'),
        ),
    ]