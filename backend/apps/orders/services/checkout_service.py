from django.db import transaction
from django.core.exceptions import ValidationError

from apps.orders.models import Order, OrderItem
from apps.cart.models import Cart
from apps.products.models import Product


class CheckoutService:

    @staticmethod
    @transaction.atomic
    def checkout(user):

        # 1. Get cart
        try:
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            raise ValidationError("Cart is empty")

        cart_items = cart.items.all()

        if not cart_items:
            raise ValidationError("No items in cart")

        # 2. Create order
        order = Order.objects.create(
            user=user,
            total_price=0,
            status="PENDING"
        )

        total_price = 0

        # 3. Process items
        for item in cart_items:
            product = item.product

            # stock validation
            if product.stock < item.quantity:
                raise ValidationError(
                    f"Not enough stock for {product.name}"
                )

            # price snapshot
            item_price = product.price * item.quantity
            total_price += item_price

            # create order item
            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=item.quantity,
                price=product.price
            )

            # reduce stock
            product.stock -= item.quantity
            product.save()

        # 4. Update order total
        order.total_price = total_price
        order.save()

        # 5. Clear cart
        cart.items.all().delete()

        return order