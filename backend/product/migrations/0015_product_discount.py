# Generated by Django 5.1.4 on 2025-01-04 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0014_remove_attribute_attribute_categor_8d5c9c_idx_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='discount',
            field=models.PositiveIntegerField(default=0, help_text='Введіть знижку у відсотках (0-100)', verbose_name='Знижка (%)'),
        ),
    ]