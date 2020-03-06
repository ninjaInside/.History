from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class WidgetAttrsMixin:
    def add_widget_attr(self, field, attr_name, value):
        field.widget.attrs[attr_name] = value


class UserForm(UserCreationForm, WidgetAttrsMixin):
    def get_initial_for_field(self, field, field_name):
        if field_name == 'username':
            self.add_widget_attr(field, 'placeholder', 'Your nickname')
        elif field_name == 'password1':
            self.add_widget_attr(field, 'placeholder', 'Your password')
        elif field_name == 'password2':
            self.add_widget_attr(field, 'placeholder',
                    'Confirm your password')

        self.add_widget_attr(field, 'class', 'form-input__input')
        super().get_initial_for_field(field, field_name)


class LoginForm(AuthenticationForm, WidgetAttrsMixin):
    def get_initial_for_field(self, field, field_name):
        if field_name == 'username':
            self.add_widget_attr(field, 'placeholder', 'Your nickname')
        elif field_name == 'password':
            self.add_widget_attr(field, 'placeholder', 'Your password')

        field.widget.attrs['class'] = 'form-input__input'
        super().get_initial_for_field(field, field_name)
