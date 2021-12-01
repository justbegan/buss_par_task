# buss_par_task
<h2>Для запуска с докером</h2> 
1) docker-compose build
<br>
2) docker-compose up

<h2>Без докера</h2>
1) install python 3.9
2) pip install -r requirements.txt<br>
3) в buss_par_task/settings.py прописать свои настройки db<br>
4) python manage.py makemigrations<br>
5) python manage.py migrate<br>
6) python manage.py runserver<br>


