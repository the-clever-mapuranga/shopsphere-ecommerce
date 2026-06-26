from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .services.checkout_service import CheckoutService
from .models import Order
from .serializers import OrderSerializer


class CheckoutAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            order = CheckoutService.checkout(request.user)

            return Response(
                {
                    "message": "Order created successfully",
                    "order_id": order.id,
                    "total_price": order.total_price,
                },
                status=status.HTTP_201_CREATED,
            )

        except Exception as e:
            return Response(
                {
                    "error": str(e)
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class OrderHistoryAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        orders = Order.objects.filter(
            user=request.user
        ).order_by("-created_at")

        serializer = OrderSerializer(
            orders,
            many=True
        )

        return Response(serializer.data)