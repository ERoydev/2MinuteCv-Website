from django.db import models

# Create your models here.


class DataInfo(models.Model):

    # Personal Details
    job_title = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    # Additional details - Optionals
    address = models.CharField(max_length=200, blank=True, null=True)
    postal_code = models.CharField(max_length=100, blank=True, null=True)
    driving_license = models.CharField(max_length=200, blank=True, null=True)
    nationality = models.CharField(max_length=200, blank=True, null=True)
    place_of_birth = models.CharField(max_length=200, blank=True, null=True)
    date_of_birth = models.CharField(max_length=200, blank=True, null=True)

    # Professional Summary
    description = models.TextField()


    # Employment History
    