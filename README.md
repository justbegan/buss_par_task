# buss_par_task
<h2>Для запуска с докером</h2> 
1) docker-compose build
<br>
2) docker-compose up

<h2>Без докера</h2>
1) install python 3.9
2) pip install -r requirements.txt
3) в buss_par_task/settings.py прописать свои настройки db
4) python manage.py makemigrations
5) python manage.py migrate
6) python manage.py runserver


