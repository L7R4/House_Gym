# Generated by Django 4.1.2 on 2022-11-02 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dia',
            name='jueves',
        ),
        migrations.RemoveField(
            model_name='dia',
            name='lunes',
        ),
        migrations.RemoveField(
            model_name='dia',
            name='martes',
        ),
        migrations.RemoveField(
            model_name='dia',
            name='miercoles',
        ),
        migrations.RemoveField(
            model_name='dia',
            name='viernes',
        ),
        migrations.AddField(
            model_name='dia',
            name='dia',
            field=models.CharField(choices=[('lunes', 'Lunes'), ('martes', 'Martes'), ('miercoles', 'Miercoles'), ('jueves', 'Jueves'), ('viernes', 'Viernes')], default='Ninguno', max_length=20),
        ),
        migrations.AddField(
            model_name='dia',
            name='hora',
            field=models.IntegerField(default=0),
        ),
    ]