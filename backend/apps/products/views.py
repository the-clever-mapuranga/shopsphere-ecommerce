from django.db.models import Avg, Q

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Product, Review
from .serializers import ProductSerializer, ReviewSerializer


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.filter(is_active=True)

        search = self.request.query_params.get("search")
        category = self.request.query_params.get("category")
        min_price = self.request.query_params.get("min_price")
        max_price = self.request.query_params.get("max_price")

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(description__icontains=search)
            )

        if category:
            queryset = queryset.filter(
                category__name__iexact=category
            )

        if min_price:
            queryset = queryset.filter(
                price__gte=min_price
            )

        if max_price:
            queryset = queryset.filter(
                price__lte=max_price
            )

        return queryset


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Product.objects.filter(is_active=True)

    def retrieve(self, request, *args, **kwargs):
        product = self.get_object()

        reviews = product.product_reviews.all()

        related_products = Product.objects.filter(
            category=product.category,
            is_active=True
        ).exclude(id=product.id)[:4]

        return Response({
            "product": ProductSerializer(product).data,
            "reviews": ReviewSerializer(
                reviews,
                many=True
            ).data,
            "related_products": ProductSerializer(
                related_products,
                many=True
            ).data
        })


class ReviewCreateAPIView(generics.CreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):

        product = Product.objects.get(
            slug=self.kwargs["slug"]
        )

        serializer.save(
            user=self.request.user,
            product=product
        )

        average = (
            product.product_reviews.aggregate(
                Avg("rating")
            )["rating__avg"]
            or 0
        )

        product.rating = round(average, 1)
        product.reviews = product.product_reviews.count()
        product.save()