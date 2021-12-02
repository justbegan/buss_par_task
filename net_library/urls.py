from django.urls import path
from net_library import views

open_book = views.Open_book()
urlpatterns = [
    path('', views.main_page),
    path('add_book', open_book.add_book, name='add_book'),
    path('change_book', open_book.change_book, name='change_book'),
    path('delete_book', open_book.delete_book, name='delete_book'),
    path('view_book/<int:pk>', open_book.view_book, name='view_book'),
]