from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    HealthCheckView,
    RegisterAPIView,
)

urlpatterns = [
    path(
        "health/",
        HealthCheckView.as_view()
    ),

    path(
        "register/",
        RegisterAPIView.as_view()
    ),

    path(
        "login/",
        TokenObtainPairView.as_view()
    ),

    path(
        "refresh/",
        TokenRefreshView.as_view()
    ),
]