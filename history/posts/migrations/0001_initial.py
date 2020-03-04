# Generated by Django 3.0.3 on 2020-03-04 14:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Название категории')),
                ('slug', models.SlugField(verbose_name='Слаг')),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Заголовок статьи')),
                ('slug', models.SlugField(verbose_name='Слаг')),
                ('content', models.TextField(verbose_name='Текст статьи')),
                ('pub_date', models.DateField(auto_now_add=True, verbose_name='Дата публикации')),
                ('image', models.ImageField(upload_to='article_images', verbose_name='Превью статьи')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.Category', verbose_name='Категория')),
            ],
            options={
                'ordering': ['pub_date'],
            },
        ),
    ]
