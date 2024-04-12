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
        request.session['form_data'] = formData  # Store data in session
        return JsonResponse({'message': 'Form data received successfully'})
    else:
        form_data_str = request.session.get('form_data')  # Retrieve data from session
        form_data_sliced = str(form_data_str)[2:-6]
        form_data = eval(form_data_sliced)

        context = {key:value for key, value in form_data.items()}

        print(context)
        
        return render(request, 'cvapp/cv_templates/Modern Professional/template.html', context)


def user_data(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        print(first_name)

    return render(request, 'create_cv.html')