# script_for_dump.py
import os
import django
from django.core.management import call_command

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
django.setup()

with open("backup.json", "w", encoding="utf-8") as f:
    call_command(
        "dumpdata", "core", "news", "orders", "product", "user", indent=4, stdout=f
    )
