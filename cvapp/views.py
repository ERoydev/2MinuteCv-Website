from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
# Create your views here.


def create_cv(request):
    if request.user.is_authenticated:
        return render(request, 'create_cv.html')
    else:
        return redirect('register_user')


def template_view(request):
    context = {
        "name": "Emil Roydev"
    }

    return render(request, 'cvapp/cv_templates/Modern Professional/template.html', context)

def user_data(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        print(first_name)

    return render(request, 'create_cv.html')