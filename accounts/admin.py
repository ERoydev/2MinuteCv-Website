from django.contrib import admin
from django.contrib.auth.models import User


class MyUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'is_staff', 'is_active']


admin.site.unregister(User)
admin.site.register(User, MyUserAdmin)