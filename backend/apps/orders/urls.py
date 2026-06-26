from django.urls import path

from .views import (
    CheckoutAPIView,
    OrderHistoryAPIView,
)

urlpatterns = [
    path(
        "checkout/",
        CheckoutAPIView.as_view(),
        name="checkout",
    ),

    path(
        "",
        OrderHistoryAPIView.as_view(),
        name="order-history",
    ),
]