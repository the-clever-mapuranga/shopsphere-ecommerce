from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ContactMessageSerializer
from .models import ContactMessage



class ContactCreateView(generics.CreateAPIView):
	queryset = ContactMessage.objects.all()
	serializer_class = ContactMessageSerializer
