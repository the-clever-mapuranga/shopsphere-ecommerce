from django.shortcuts import render

# Create your views here.
# apps/users/views.py

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, permissions

from .serializers import UserSerializer, UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class HealthCheckView(APIView):
    def get(self, request):
        return Response(
            {
                "status": "ok",
                "service": "shopsphere-api"
            }
        )


class AdminCreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.IsAdminUser]


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

