from markdown import markdown

from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField('Заголовок статьи', max_length=50)
    slug = models.SlugField('Слаг')
    content = models.TextField('Текст статьи')
    pub_date = models.DateField('Дата публикации', auto_now_add=True)
    author = models.ForeignKey(User, models.CASCADE, verbose_name='Автор')
    category = models.ForeignKey('Category', models.CASCADE,
            verbose_name='Категория')
    image = models.ImageField('Превью статьи', upload_to='article_images')

    class Meta:
        ordering = ['pub_date']
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.content = markdown(self.content)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('posts:post_detail',
                args=[self.category.slug, self.slug])


class Category(models.Model):
    title = models.CharField('Название категории', max_length=50)
    slug = models.SlugField('Слаг')

    class Meta:
        ordering = ['title']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def get_absolute_url(self):
        return reverse('posts:posts_list', args=[self.slug])

    def __str__(self):
        return self.title

