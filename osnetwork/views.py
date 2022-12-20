from django.shortcuts import render, redirect

from django.http import HttpResponse
from .models import UserAspects

# Create your views here.

def surveyhome(request):
        return render(request, 'aspectsForm.html')

def thankyou(request):
    if request.method == 'POST':
        reg_no = request.POST['Rno']
        usap_1 = request.POST['User_Aspect1']
        usap_2 = request.POST['User_Aspect2']
        usap_3 = request.POST['User_Aspect3']
        usap_4 = request.POST['User_Aspect4']
        usap_5 = request.POST['User_Aspect5']

        Aspects = UserAspects(regNo=reg_no, asp1=usap_1, asp2=usap_2, asp3=usap_3, asp4=usap_4, asp5=usap_5)

        Aspects.save()
        print("Data Inserted Successfully")
        return render(request, 'thankyou.html')
    else:
        print("Failed to insert data.")