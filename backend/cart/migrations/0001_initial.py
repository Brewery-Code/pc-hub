# Generated by Django 5.1.4 on 2025-01-02 16:37

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0014_remove_attribute_attribute_categor_8d5c9c_idx_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата створення')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата останнього оновлення')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Користувач')),
            ],
            options={
                'verbose_name': 'Кошик',
                'verbose_name_plural': 'Кошики',
                'db_table': 'Cart',
            },
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1, verbose_name='Кількість товару')),
                ('price', models.FloatField(editable=False, verbose_name='Ціна товару')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cart.cart', verbose_name='Кошик користувача')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product', verbose_name='Товар')),
            ],
            options={
                'verbose_name': 'Товар в кошику',
                'verbose_name_plural': 'Товари в кошику',
                'db_table': 'CartItem',
            },
        ),
        migrations.AddIndex(
            model_name='cart',
            index=models.Index(fields=['user'], name='Cart_user_id_9c7fad_idx'),
        ),
        migrations.AddIndex(
            model_name='cartitem',
            index=models.Index(fields=['product'], name='CartItem_product_b5d4ed_idx'),
        ),
    ]