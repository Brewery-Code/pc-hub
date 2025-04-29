#!/bin/bash

python manage.py migrate

python manage.py flush

python manage.py loaddata backup.json