from django.urls import path

from .views import HealthCheckView, AdminCreateUserView, MeView

urlpatterns = [
    path("health/", HealthCheckView.as_view()),
    path("admin/create-user/", AdminCreateUserView.as_view()),
    path("me/", MeView.as_view()),
]