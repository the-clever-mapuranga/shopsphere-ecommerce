from django.shortcuts import render

# Create your views here.
# apps/users/views.py

from rest_framework.response import Response
from rest_framework.views import APIView


class HealthCheckView(APIView):
    def get(self, request):
        return Response(
            {
                "status": "ok",
                "service": "shopsphere-api"
            }
        )

