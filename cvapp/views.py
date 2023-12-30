from django.shortcuts import render, redirect, HttpResponse
# Create your views here.


def create_cv(request):
    return render(request, 'create_cv.html')


def template_view(request):
    return render(request, 'cvapp/cv_templates/Modern Professional/template.html')


def handle_skills(request):
    if request.method == "POST":
        skill_name = request.POST['skill_name']
        skill_range = request.POST['skill_range']

        print('yesss')

        context = {
            'skill_name': skill_name,
            'skill_range': skill_range
        }

        return render(request, 'create_cv.html', context)

    return redirect('create_cv')