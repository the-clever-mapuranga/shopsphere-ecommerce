from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.products.models import Product

from .models import Cart, CartItem
from .serializers import (
    AddToCartSerializer,
    CartItemSerializer,
)


class CartAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        print("=" * 50)
        print("USER:", request.user)
        print("AUTH:", request.auth)
        print("IS AUTHENTICATED:", request.user.is_authenticated)
        print("=" * 50)

        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        serializer = CartItemSerializer(
            cart.items.all(),
            many=True
        )

        return Response(serializer.data)


class AddToCartAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = AddToCartSerializer(
            data=request.data
        )

        serializer.is_valid(raise_exception=True)

        product = Product.objects.get(
            id=serializer.validated_data["product_id"]
        )

        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={
                "quantity": serializer.validated_data["quantity"]
            }
        )

        if not created:
            item.quantity += serializer.validated_data["quantity"]
            item.save()

        return Response(
            {"message": "Added to cart"},
            status=status.HTTP_201_CREATED
        )


class RemoveCartItemAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, item_id):

        item = CartItem.objects.get(
            id=item_id,
            cart__user=request.user
        )

        item.delete()

        return Response({"message": "Removed"})


class UpdateCartItemAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def patch(self, request, item_id):

        quantity = request.data.get("quantity")

        item = CartItem.objects.get(
            id=item_id,
            cart__user=request.user
        )

        item.quantity = quantity
        item.save()

        return Response({"message": "Updated"})