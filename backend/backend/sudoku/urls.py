from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from sudoku.views import SudokuViewset


router = DefaultRouter()
router.register(r'', SudokuViewset, basename='sudoku')


urlpatterns = [
    path('', include(router.urls)),
]


urlpatterns += router.urls