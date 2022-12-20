from django.db import models

# Create your models here.

class UserAspects(models.Model):
    
    regNo = models.BigIntegerField()
    asp1 = models.CharField(max_length=100)
    asp2 = models.CharField(max_length=100)
    asp3 = models.CharField(max_length=100)
    asp4 = models.CharField(max_length=100)
    asp5 = models.CharField(max_length=100)
    class Meta:
        db_table = 'useraspects'
