from django.db import models

# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True) # auto_now 현재 시각
    created = models.DateTimeField(auto_now_add=True) # auto_now_add 생성 시각

    def __str__(self):
        return self.body[0:50]