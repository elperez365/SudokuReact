from .models import SudokuResult
from rest_framework import serializers

class SudokuResultSerializer(serializers.ModelSerializer):
    class Meta:
        model=SudokuResult
        fields=[
            "pk",
            "sudoku_grid",
            "is_valid_solution"
        ]

class SudokuSerializer(serializers.ModelSerializer):
    class Meta:
        model=SudokuResult
        fields=[
            "pk",
            "sudoku_grid"
        ]