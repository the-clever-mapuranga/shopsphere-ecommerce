from django.contrib import admin

from .models import (
    TwoFactorSettings,
    NotificationSettings,
    DiscountRule,
)

admin.site.register(TwoFactorSettings)
admin.site.register(NotificationSettings)
admin.site.register(DiscountRule)