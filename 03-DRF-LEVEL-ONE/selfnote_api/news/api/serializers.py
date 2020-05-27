# news/api/serializers.py

from rest_framework import serializers
from news.models import Article

from django.contrib.auth.validators import UnicodeUsernameValidator

class ArticleSerializer(serializers.Serializer):
    """Article Serializer
    """
    id = serializers.IntegerField(read_only=True)
    author = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    body = serializers.CharField()
    location = serializers.CharField()
    publication_date = serializers.DateField()
    active = serializers.BooleanField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validate_data):
        print("Article Serializer - Create")
        return Article.objects.create(**validate_data)

    def update(self, instance, validated_data):
        instance.author = validated_data.get(
            'author', instance.author)
        instance.title = validated_data.get(
            'title', instance.title)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.body = validated_data.get(
            'body', instance.body)
        instance.location = validated_data.get(
            'location', instance.location)
        instance.publication_date = validated_data.get(
            'publication_date', instance.publication_date)
        instance.active = validated_data.get(
            'active', instance.active)
        instance.save()
        return instance

    def validate(self, data):
        """Check that description and title are different"""
        if data["title"] == data["description"]:
            raise serializers.ValidationError("Title and Description must be different from one another")
        return data

    def validate_title(self, value):
        if len(value) < 60:
            raise serializers.ValidationError("The title has to be at least 60 charactor")
        return value



