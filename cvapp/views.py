from django.shortcuts import render

# Create your views here.


def create_cv(request):
    return render(request, 'create_cv.html')
