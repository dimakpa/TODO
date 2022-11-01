from django.db import models
from django.utils import timezone
# Create your models here.

class Autor(models.Model):
    name = models.TextField(
        verbose_name='Имя',
        max_length=20
    )
    age = models.IntegerField()
    is_writing = models.BooleanField(default=False)
    birthday = models.DateTimeField(
        default=timezone.now(),
        null=True,
        blank=True
    )

    writing = models.ForeignKey('Writing', on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class Writing(models.Model):
    text = models.TextField(
        verbose_name='Запись',
        max_length=500
    )
    length = models.IntegerField()
    time_create = models.DateTimeField(
        default=timezone.now(),
        null=True,
        blank=True
    )

    tag = models.ForeignKey('Tag', on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Tag(models.Model):
    text = models.TextField()
    color = models.TextField(
        verbose_name='Цвет',
        max_length=20
    )



    def __str__(self):
        return self.text