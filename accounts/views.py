from django.contrib.auth.decorators import login_required
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.utils.http import urlsafe_base64_decode

from .utils import send_email


def login_user(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('my_account')

        else:
            messages.error(request, "Your user ID or password is incorrect")
            return redirect('login_user')

    else:
        return render(request, 'accounts/login_user.html')


def logout_user(request):
    if not request.user.is_authenticated:
        messages.warning(request, "You are not logged-in to logout!")
        return redirect('login_user', )

    logout(request)
    return redirect('home')


def register_user(request):
    if request.user.is_authenticated:
        messages.error(request, 'You are already logged in!')
        return redirect('home')

    elif request.method == "GET":
        return render(request, 'accounts/register_user.html', {})

    else:
        if request.POST['password'] == request.POST['confirm_password']:
            try:
                email = request.POST['email']
                password = request.POST['password']
                confirm_password = request.POST['confirm_password']
                user = User.objects.create_user(email, password, confirm_password)
                user.save()
                login(request, user)
                return redirect('home')

            except IntegrityError:
                return render(request, 'accounts/register_user.html', {"error": "Username or Email address already exists!"})

        else:
            return render(request, 'accounts/register_user.html', {"error": "Passwords do NOT match!"})


@login_required(login_url='login_user')
def my_account(request):
    return render(request, 'accounts/my_account.html')


def forgot_password(request):

    if request.method == "POST":
        email = request.POST['email']

        if User.objects.filter(username=email).exists():
            user = User.objects.get(username=email)
            mail_message = "Reset your Password"
            email_template = 'accounts/reset_password_email.html'

            send_email(request, user, mail_message, email_template)

            messages.success(request, "Password reset link has been sent to your email address.")
            print("Yes")
            return redirect('login_user')

        else:
            messages.error(request, "Account with this email address does not exist.")
            return redirect('forgot_password')

    return render(request, 'accounts/forgot_password.html')


def reset_password_validate(request, uidb64, token):

    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User._default_manager.get(pk=uid)

    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        request.session['uid'] = uid
        messages.info(request, "Please reset your password!")
        return redirect('reset_password')

    else:
        messages.error(request, 'This link has been expired!')
        return redirect('my_account')


def reset_password(request):

    if request.method == "POST":
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password == confirm_password:
            pk = request.session.get('uid')
            user = User.objects.get(pk=pk)
            user.set_password(password)
            user.is_active = True
            user.save()
            messages.success(request, 'Password reset successfully')
            return redirect('login_user')

        else:
            messages.error(request, 'Passwords do not match!')
            return redirect('reset_password')

    return render(request, 'accounts/reset_password.html')
