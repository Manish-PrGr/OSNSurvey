from django.urls import path

from . import views

urlpatterns = [
    path('',views.surveyhome, name='surveyhome'),
    path('thankyou/',views.thankyou, name='thankyou')
]