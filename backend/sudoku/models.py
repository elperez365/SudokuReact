from django.db import models

class SudokuResult(models.Model):
    sudoku_grid = models.JSONField()
    is_valid_solution = models.BooleanField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Sudoku Result ({self.created_at})"
