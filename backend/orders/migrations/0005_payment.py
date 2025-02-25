# Generated by Django 5.1.4 on 2025-02-04 11:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_orderitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('successfully', 'Successfully'), ('failed', 'Failed'), ('expectation', 'Expectation')], default='expectation', max_length=20, verbose_name='Статус')),
                ('payment_method', models.CharField(choices=[('cod', 'Cash on Delivery'), ('online_card', 'Online Payment (Card)'), ('google_pay', 'Google Pay')], max_length=30, verbose_name='Спосіб оплати')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Сума')),
                ('transaction_id', models.CharField(blank=True, max_length=100, null=True, unique=True, verbose_name='ID транзакції')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата створення')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='orders.order', verbose_name='Замовлення')),
            ],
        ),
    ]
