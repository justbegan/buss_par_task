# Generated by Django 3.2.9 on 2021-12-01 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('net_library', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='content',
            field=models.TextField(verbose_name='Описание'),
        ),
    ]
