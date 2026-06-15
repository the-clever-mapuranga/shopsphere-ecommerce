from django.urls import path

from .views import (
    CartAPIView,
    AddToCartAPIView,
)

urlpatterns = [
    path(
        "",
        CartAPIView.as_view()
    ),

    path(
        "add/",
        AddToCartAPIView.as_view()
    ),
]