from rest_framework import serializers
from .models import *

#
# class AutorSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=20)
#     age = serializers.CharField(max_length=3)
#     is_writing = serializers.CharField(max_length=400)
#     writing_id = serializers.IntegerField()
#
#
#     def create(self, validated_date):
#         return Autor.objects.create(**validated_date)

class AutorSerializer(serializers.ModelSerializer):
  class Meta:
      model = Autor
      fields = ('id', 'name', 'age', 'is_writing', 'writing')

class WritingSerializer(serializers.ModelSerializer):
  class Meta:
      model = Writing
      fields = ('id', 'text', 'length', 'time_create', 'tag')

class TagSerializer(serializers.ModelSerializer):
  class Meta:
      model = Tag
      fields = ('id', 'text', 'color')

