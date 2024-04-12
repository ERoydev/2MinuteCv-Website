from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_cv, name='create_cv'),
    path('template/', views.template_view, name='template_view'),
    path('user_data/', views.user_data, name='user_data'),
]