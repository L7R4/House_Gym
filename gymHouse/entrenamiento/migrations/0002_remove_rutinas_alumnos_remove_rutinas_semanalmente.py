# Generated by Django 4.1.2 on 2022-11-10 05:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('entrenamiento', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rutinas',
            name='alumnos',
        ),
        migrations.RemoveField(
            model_name='rutinas',
            name='semanalmente',
        ),
    ]