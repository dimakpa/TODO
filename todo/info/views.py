from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import viewsets
# Create your views here.

class AutorView(APIView):
    def get(self, request):
        autors = Autor.objects.all()
        serializer = AutorSerializer(autors, many=True)
        return Response({"autors": serializer.data})

    def post(self, request):
        autor = request.data.get('autors')
        serializer = AutorSerializer(data=autor)
        if serializer.is_valid(raise_exception=True):
            autor_saved = serializer.save()
        return Response({"ok": "vse ok"})


class AutorViewSets(viewsets.ModelViewSet):
    serializer_class = AutorSerializer
    queryset = Autor.objects.all()

class WritingViewSets(viewsets.ModelViewSet):
    serializer_class = WritingSerializer
    queryset = Writing.objects.all()

class TagViewSets(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

    # def list(self, request):
    #     queryset = Autor.objects.all()
    #     serializer = AutorSerializer(queryset, many=True)
    #     return Response(serializer.data)
    #
    # def retrieve(self, request, pk=None):
    #     queryset = Autor.objects.all()
    #     autor = get_object_or_404(queryset, pk=pk)
    #     serializer = AutorSerializer(autor)
    #     return Response(serializer.data)
