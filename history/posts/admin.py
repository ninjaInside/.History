from django.contrib import admin

from .models import Post, Category


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category')
    list_filter = ('pub_date', 'title')
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author', 'category')
    search_fields = ('title', 'author', 'category')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title',)
