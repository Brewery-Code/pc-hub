from django.core.management.base import BaseCommand
from core.models import Wishlist
from django.utils.timezone import now
from datetime import timedelta

from models import Wishlist


class Command(BaseCommand):
    """
    Django management команда для очищення прострочених анонімних списків бажаного.

    Опис:
        Видаляє всі списки бажаного, прив'язані до сесій, які не оновлювалися протягом останніх 7 днів.

    Використання:
        python manage.py clear_wishlists
    """

    help = "Clear expired session-based wishlists"

    def handle(self, *args, **kwargs):
        threshold_date = now() - timedelta(days=7)

        expired_carts = Wishlist.objects.filter(
            session_id__isnull=False,
            last_accessed__lt=threshold_date,
        )

        count = expired_carts.count()
        expired_carts.delete()

        self.stdout.write(f"{count} expired anonymous wishlists were deleted.")
