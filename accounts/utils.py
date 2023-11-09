from django.contrib.sites.shortcuts import get_current_site


def send_email(request, user):
        current_site = get_current_site(request)
