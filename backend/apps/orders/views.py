from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .services.checkout_service import CheckoutService


class CheckoutAPIView(APIView):

    def post(self, request):
        try:
            order = CheckoutService.checkout(request.user)

            return Response({
                "message": "Order created successfully",
                "order_id": order.id,
                "total_price": order.total_price
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({
                "error": str(e)
            }, status=status.HTTP_400_BAD_REQUEST)