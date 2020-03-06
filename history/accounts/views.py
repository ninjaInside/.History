from django.urls import reverse
from django.views.generic.edit import FormView
from django.contrib.auth.views import LoginView

from .forms import UserForm, LoginForm

class UserCreateView(FormView):
    form_class = UserForm
    template_name = 'registration/registration.html'
    success_url = '/accounts/login/'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class MyLoginView(LoginView):
    form_class = LoginForm

