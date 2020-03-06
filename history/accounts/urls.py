from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

app_name = 'accounts'
urlpatterns = [
    path('registration/', views.UserCreateView.as_view(),
        name='registration'),
    path('login/', views.MyLoginView.as_view(), name='login'),
]
