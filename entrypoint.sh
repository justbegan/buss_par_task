#! /bin/bash
sleep 15 
python manage.py makemigrations --no-input
python manage.py migrate --no-input
echo "Apply database migrations"
python manage.py collectstatic --no-input
exec gunicorn buss_par_task.wsgi:application -b 0.0.0.0:8000 --reload


