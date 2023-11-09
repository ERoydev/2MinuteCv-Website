from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_cv, name='create_cv')
]