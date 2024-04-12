from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
# Create your views here.


def create_cv(request):
    if request.user.is_authenticated:
        return render(request, 'create_cv.html')
    else:
        return redirect('register_user')


def template_view(request):
  if request.method == 'POST':
    formData = request.POST
    context = {
      'data': formData,  # Include form data in the context
    }
  else:
    context = {  # Provide initial context data even for GET requests
      "name": "Emil Roydev"  # Example initial data (optional)
    }

  return render(request, 'cvapp/cv_templates/Modern Professional/template.html', context)

def user_data(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        print(first_name)

    return render(request, 'create_cv.html')