import random

from django.core.mail import send_mail
from django.conf import settings

from apps.users.models_2fa import TwoFactorCode


def generate_code():
    return str(random.randint(100000, 999999))


def send_two_factor_code(user):

    code = generate_code()

    TwoFactorCode.objects.create(
        user=user,
        code=code
    )

    send_mail(
        subject="ShopSphere Verification Code",
        message=f"Your verification code is: {code}",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False,
    )

    return code