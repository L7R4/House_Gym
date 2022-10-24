# Generated by Django 4.1.2 on 2022-10-22 15:03

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0001_initial'),
        ('entrenamiento', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ejercicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_tipo', multiselectfield.db.fields.MultiSelectField(choices=[('gluteos', 'gluteos'), ('espalda', 'espalda'), ('abdominales', 'abdominales'), ('piernas', 'piernas'), ('brazos', 'brazos'), ('elongacion', 'elongacion')], max_length=50)),
                ('nombre', models.CharField(max_length=100)),
                ('pasos', models.TextField()),
                ('icono', models.ImageField(upload_to='images/iconos/ejercicios/')),
                ('video', models.FileField(upload_to='videos/ejercicios/')),
            ],
        ),
        migrations.AddField(
            model_name='rutinas',
            name='genero',
            field=models.CharField(choices=[('hombre', 'hombre'), ('mujer', 'mujer')], default='', max_length=20),
        ),
        migrations.RemoveField(
            model_name='rutinas',
            name='alumnos',
        ),
        migrations.RemoveField(
            model_name='rutinas',
            name='ejercicios',
        ),
        migrations.AlterField(
            model_name='rutinas',
            name='fecha',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AddField(
            model_name='rutinas',
            name='alumnos',
            field=models.ManyToManyField(to='personas.persona'),
        ),
        migrations.AddField(
            model_name='rutinas',
            name='ejercicios',
            field=models.ManyToManyField(related_name='ejercicios', to='entrenamiento.ejercicio'),
        ),
    ]
