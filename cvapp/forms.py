from django import forms


class ExperienceForm(forms.Form):
    job_title = forms.CharField()
    employer = forms.CharField()

    start_date = forms.CharField()
    end_date = forms.CharField()
    city = forms.CharField()
