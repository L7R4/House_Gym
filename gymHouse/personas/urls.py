from django.urls import path
from .views import Turnos, ViewEditPerfil, UpdatePassword, AdminTurnos,AdminAlumnos,ViewDetailUserFromAlumnos,ViewDetailUserFromTurnos

app_name= "personas"

urlpatterns = [
    path("turnos/", Turnos.as_view(), name="turnos"),
    path("perfil/", ViewEditPerfil.as_view(), name ="perfil"),
    path("perfil/ver/alumno/<int:pk>", ViewDetailUserFromAlumnos.as_view(), name ="view_perfil_from_alumnos"),
    path("perfil/ver/alumnos/<int:pk>", ViewDetailUserFromTurnos.as_view(), name ="view_perfil_from_turnos"),
    path("perfil/change_password/", UpdatePassword.as_view(), name ="change_pass"),
    path("turnos/admin", AdminTurnos.as_view(), name ="adminTurnos"),
    path("alumnos/admin", AdminAlumnos.as_view(), name ="adminAlumnos"),
]