# Generated by Django 5.1.4 on 2024-12-28 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_attribute_name_en_attribute_name_uk'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(null=True, upload_to='category_images/', verbose_name='Фото товару'),
        ),
    ]