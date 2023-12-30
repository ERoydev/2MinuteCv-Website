from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_cv, name='create_cv'),
    path('handle_skills/', views.handle_skills, name='handle_skills'),
    path('template/', views.template_view, name='template_view'),

]