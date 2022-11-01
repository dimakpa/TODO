from django.contrib import admin
from .models import Autor, Writing, Tag

# Register your models here.
admin.site.register(Autor)
admin.site.register(Writing)
admin.site.register(Tag)