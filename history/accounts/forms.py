from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class UserForm(UserCreationForm):
    def get_initial_for_field(self, field, field_name):
        if field_name == 'username':
            field.widget.attrs['placeholder'] = 'Your nickname'
        elif field_name == 'password1':
            field.widget.attrs['placeholder'] = 'Your password'
        elif field_name == 'password2':
            field.widget.attrs['placeholder'] = 'Confirm your password'

        field.widget.attrs['class'] = 'form-input__input'
        super().get_initial_for_field(field, field_name)


class LoginForm(AuthenticationForm):
    def get_initial_for_field(self, field, field_name):
        if field_name == 'username':
            field.widget.attrs['placeholder'] = 'Your nickname'
        elif field_name == 'password':
            field.widget.attrs['placeholder'] = 'Your password'

        field.widget.attrs['class'] = 'form-input__input'
        super().get_initial_for_field(field, field_name)
