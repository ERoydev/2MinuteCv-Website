from django.contrib import admin
from django.contrib.auth.models import User
from .models import Customer, UserProfile


class MyUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'is_staff', 'is_active']


admin.site.unregister(User)
admin.site.register(User, MyUserAdmin)

admin.site.register(Customer)

