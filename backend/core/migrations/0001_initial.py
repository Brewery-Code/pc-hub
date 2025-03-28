# Generated by Django 5.1.4 on 2025-03-26 10:15

import django.core.validators
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('title_en', models.CharField(max_length=100, null=True, verbose_name='Заголовок')),
                ('title_uk', models.CharField(max_length=100, null=True, verbose_name='Заголовок')),
                ('description', models.TextField(verbose_name='Опис')),
                ('description_en', models.TextField(null=True, verbose_name='Опис')),
                ('description_uk', models.TextField(null=True, verbose_name='Опис')),
                ('image', models.ImageField(upload_to='banner_img/', verbose_name='Фото банера')),
            ],
            options={
                'verbose_name': 'Банер',
                'verbose_name_plural': 'Банери',
                'db_table': 'Banner',
            },
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Назва компанії партнера')),
                ('image', models.ImageField(upload_to='partners/', verbose_name='Логотип компанії партнера')),
            ],
            options={
                'verbose_name': 'Логотип партнера',
                'verbose_name_plural': 'Логотипи партнерів',
                'db_table': 'Partner',
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=300, verbose_name='Коментар')),
                ('rating', models.FloatField(validators=[django.core.validators.MinValueValidator(1.0), django.core.validators.MaxValueValidator(5.0)], verbose_name='Оцінка')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата створення')),
                ('status', models.CharField(choices=[('PN', 'Pending'), ('AP', 'Approved'), ('RJ', 'Rejected')], default='PN', max_length=2, verbose_name='Статус')),
                ('reply', models.TextField(blank=True, null=True, verbose_name='Відповідь адміністрації')),
            ],
            options={
                'verbose_name': 'Відгук',
                'verbose_name_plural': 'Відгуки',
                'db_table': 'Review',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session_id', models.CharField(blank=True, max_length=255, null=True, verbose_name='Сесія')),
                ('last_accessed', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Останній вхід')),
            ],
            options={
                'verbose_name': 'Список бажаного',
                'verbose_name_plural': 'Списки бажаного',
                'db_table': 'Wishlist',
            },
        ),
        migrations.CreateModel(
            name='WishlistItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'WishlistItem',
            },
        ),
    ]
