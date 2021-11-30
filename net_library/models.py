from django.db import models


# Create your models here.
class Books(models.Model):
    title = models.CharField("Название книги", max_length=100)
    author = models.CharField("Автор", max_length=100, blank=True, default="unknown")
    content = models.TextField("Описание")

    def __str__(self):
        return self.title
