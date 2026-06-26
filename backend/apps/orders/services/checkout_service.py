
from django.db import transaction
from django.core.exceptions import ValidationError

from apps.orders.models import Order, OrderItem
from apps.cart.models import Cart


class CheckoutService:

    @staticmethod
    @transaction.atomic
    def checkout(user):

        try:
            cart = Cart.objects.get(user=user)

        except Cart.DoesNotExist:
            raise ValidationError("Cart is empty")

        cart_items = cart.items.all()

        if not cart_items.exists():
            raise ValidationError("Your cart is empty.")

        order = Order.objects.create(
            user=user,
            total_price=0,
            status="PENDING",
        )

        total = 0

        for item in cart_items:

            product = item.product

            if product.stock_quantity < item.quantity:
                raise ValidationError(
                    f"Only {product.stock_quantity} item(s) left for {product.name}"
                )

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=item.quantity,
                price=product.price,
            )

            total += product.price * item.quantity

            product.stock_quantity -= item.quantity
            product.save()

        order.total_price = total
        order.save()

        cart.items.all().delete()

        return order