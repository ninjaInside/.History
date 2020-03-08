from django.shortcuts import render, get_object_or_404
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

from .models import Post, Category


class PostListView(ListView):
    paginate_by = 25
    template_name = 'posts/index_page-categories.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        self.category = get_object_or_404(Category,
            slug=self.kwargs['category_slug'])
        return Post.objects.filter(category=self.category)


def post_detail(request, category_slug, post_slug):
    post = get_object_or_404(Post, slug=post_slug,
            category__slug=category_slug)
    return render(request, 'posts/index_page-article.html', {'post': post})

