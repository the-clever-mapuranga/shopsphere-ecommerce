from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import RegisterSerializer


class HealthCheckView(APIView):

    def get(self, request):
        return Response(
            {
                "status": "healthy"
            }
        )


class RegisterAPIView(
    generics.CreateAPIView
):
    queryset = User.objects.all()

    serializer_class = RegisterSerializer