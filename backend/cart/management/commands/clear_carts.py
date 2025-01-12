from django.core.management.base import BaseCommand
from cart.models import Cart
from django.utils.timezone import now
from datetime import timedelta


class Command(BaseCommand):
    help = "Clear expired session-based carts"

    def handle(self, *args, **kwargs):
        threshold_date = now() - timedelta(days=7)

        expired_carts = Cart.objects.filter(
            session_id__isnull=False,
            last_accessed__lt=threshold_date,
        )

        count = expired_carts.count()
        expired_carts.delete()

        self.stdout.write(f"{count} expired anonymous carts were deleted.")
