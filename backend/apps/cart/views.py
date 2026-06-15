from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.products.models import Product

from .models import Cart, CartItem
from .serializers import AddToCartSerializer


class CartAPIView(APIView):

    def get(self, request):
        return Response(
            {
                "message": "Cart endpoint working"
            }
        )


class AddToCartAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = AddToCartSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        product_id = serializer.validated_data["product_id"]
        quantity = serializer.validated_data["quantity"]

        product = Product.objects.get(
            id=product_id
        )

        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        cart_item, item_created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={
                "quantity": quantity
            }
        )

        if not item_created:
            cart_item.quantity += quantity
            cart_item.save()

        return Response(
            {
                "message": "Product added to cart"
            },
            status=status.HTTP_201_CREATED
        )