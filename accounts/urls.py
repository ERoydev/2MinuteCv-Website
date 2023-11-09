from django.urls import path
from . import views

urlpatterns = [
    path('login_user/', views.login_user, name='login_user'),
    path('register_user/', views.register_user, name='register_user'),
    path('logout_user/', views.logout_user, name='logout_user'),
    path('my_account/', views.my_account, name='my_account'),

    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('reset_password/', views.reset_password, name='reset_password'),

    path('reset_password_validate/<uidb64>/<token>/', views.reset_password_validate, name='reset_password_validate')
]