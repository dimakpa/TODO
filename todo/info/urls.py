from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework.views import APIView
from rest_framework.routers import DefaultRouter

# urlpatterns = [
#     path('info/', AutorViewSets.as_view({'get': 'list'})),
#     path('info/<int:pk>', AutorViewSets.as_view({'get': 'retrieve'})),
# ]

router = DefaultRouter()
router.register(r'infoAutors', AutorViewSets, basename='dimakpa')
router.register(r'infoWritings', WritingViewSets, basename='dimakpa')
router.register(r'infoTags', TagViewSets, basename='dimakpa')
urlpatterns = router.urls

