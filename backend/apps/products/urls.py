from django.urls import path

from .views import (
    ProductListAPIView,
    ProductDetailAPIView,
    ReviewCreateAPIView,
)

urlpatterns = [
    path(
        "",
        ProductListAPIView.as_view(),
        name="product-list",
    ),

    path(
        "<slug:slug>/",
        ProductDetailAPIView.as_view(),
        name="product-detail",
    ),

    path(
        "<slug:slug>/reviews/",
        ReviewCreateAPIView.as_view(),
        name="product-review",
    ),
]