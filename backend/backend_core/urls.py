from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("sudoku/", include("sudoku.urls")),
    path("admin/", admin.site.urls),
]