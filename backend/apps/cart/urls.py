from django.urls import path

from .views import (
    CartAPIView,
    AddToCartAPIView,
    RemoveCartItemAPIView,
    UpdateCartItemAPIView,
)

urlpatterns = [
    path(
        "",
        CartAPIView.as_view(),
        name="cart",
    ),

    path(
        "add/",
        AddToCartAPIView.as_view(),
        name="cart-add",
    ),

    path(
        "remove/<int:item_id>/",
        RemoveCartItemAPIView.as_view(),
        name="cart-remove",
    ),

    path(
        "update/<int:item_id>/",
        UpdateCartItemAPIView.as_view(),
        name="cart-update",
    ),
]