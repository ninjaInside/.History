from django.urls import path

from . import views

app_name = 'posts'
urlpatterns = [
    path('<slug:category_slug>/', views.PostListView.as_view(),
         name='posts_list'),
    path('<slug:category_slug>/<slug:post_slug>/', views.post_detail,
         name='post_detail')
]
