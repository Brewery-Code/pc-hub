# Generated by Django 5.1.4 on 2025-03-16 10:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_alter_productcomment_table'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ProductComment',
        ),
    ]
