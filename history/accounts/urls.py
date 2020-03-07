from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path('registration/', views.UserCreateView.as_view(),
        name='registration'),
    path('login/', views.MyLoginView.as_view(), name='login'),
    path('password-change/', auth_views.PasswordChangeView.as_view(),
        name='password_change'),
    path('password-change/done/', auth_views.PasswordChangeDoneView.as_view(),
        name='password_change_done'),
]
