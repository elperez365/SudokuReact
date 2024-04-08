from django.utils import timezone
from rest_framework import mixins, viewsets
from rest_framework.response import Response
from rest_framework import status
import random
from rest_framework.decorators import action
from .serializers import SudokuResultSerializer
from .models import SudokuResult

class SudokuViewset(
    viewsets.GenericViewSet,
    mixins.RetrieveModelMixin
    ):

    queryset = SudokuResult.objects.all()
    serializer_class = SudokuResultSerializer

    def get_grid_by_pk(self, pk):
        """
        Restituisce la griglia di Sudoku con il pk specificato.
        """
        try:
            return SudokuResult.objects.get(pk=pk)
        except SudokuResult.DoesNotExist:
            return None
    



    def retrieve(self, request, pk=None):
        """
        Questo endpoint ritorna i valori di una griglia di sudoku.
        """
        sudoku_grid = self.get_object()
        sudoku_serializer = SudokuResultSerializer(sudoku_grid)

        return Response(sudoku_serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        """
        Questo endpoint riceve i valori di una griglia di sudoku, crea una nuova entry e determina se è una soluzione valida.
        """
        sudoku_grid = request.data.get('sudoku_grid', None)

        if not sudoku_grid:
            return Response({'message': 'Il campo sudoku_grid è obbligatorio.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if len(sudoku_grid) != 9:
            return Response({'message': 'La griglia di Sudoku deve avere 9 righe.'}, status=status.HTTP_400_BAD_REQUEST)
        for row in sudoku_grid:
            if len(row) != 9:
                return Response({'message': 'Ogni riga della griglia di Sudoku deve avere 9 colonne.'}, status=status.HTTP_400_BAD_REQUEST)
        

        is_valid_solution = self.is_valid_sudoku(sudoku_grid)

        # Salvataggio del risultato del Sudoku nel database
        SudokuResult.objects.create(
            sudoku_grid=sudoku_grid,
            is_valid_solution=is_valid_solution,
            created_at=timezone.now()
        )
        
        if not is_valid_solution:
            return Response({'message': 'Sudoku creato, la soluzione non è valida.', 'sudoku_grid': sudoku_grid}, status=status.HTTP_200_OK)
        
        return Response({'message': 'Sudoku creato, la soluzione è valida.', 'sudoku_grid': sudoku_grid}, status=status.HTTP_200_OK)
    
    def is_valid_sudoku(self, grid):
        """
        Questa funzione verifica se una griglia Sudoku è valida.
        """
        rows = [set() for _ in range(9)]
        columns = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        
        for i in range(9):
            for j in range(9):
                # if grid[i][j] == 0: POSSIBILE DOMANDA interview
                #     continue
                
                num = grid[i][j]
                
                # Verifica righe
                if num in rows[i]:
                    return False
                rows[i].add(num)
                
                # Verifica colonne
                if num in columns[j]:
                    return False
                columns[j].add(num)
                
                # Verifica box 3x3
                box_index = (i // 3) * 3 + j // 3
                if num in boxes[box_index]:
                    return False
                boxes[box_index].add(num)
                
        return True

    def generate_random_sudoku(self):
        """
        Questa funzione genera una griglia casuale di Sudoku.
        """
        side = 9
        board = [[random.randint(1, 9) for _ in range(side)] for _ in range(side)]
        
        return board
    
    @action(detail=False, methods=['get'])
    def generate_random_sudoku_grid(self, request):
        """
        Questo endpoint genera e ritorna una griglia casuale di Sudoku.
        """
        sudoku_grid = self.generate_random_sudoku()
        
        is_valid_solution = self.is_valid_sudoku(sudoku_grid)

        sudoku_result = SudokuResult.objects.create(
            sudoku_grid=sudoku_grid,
            is_valid_solution=is_valid_solution,
            created_at=timezone.now()
        )
        
        return Response({'message': 'Griglia di Sudoku casuale generata con successo.', 'sudoku_grid': sudoku_grid}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['get'])
    def get_sudoku_grids(self, request):
        """
        Questo endpoint restituisce tutte le griglie di Sudoku valide salvate nel database.
        """
        sudoku_results = SudokuResult.objects.all()
        sudoku_grids = [SudokuResultSerializer(result).data for result in sudoku_results]
        
        return Response({'sudoku_grids': sudoku_grids}, status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])

    def get_valid_sudoku_grids(self, request):
        """
        Questo endpoint restituisce tutte le griglie di Sudoku valide salvate nel database.
        """
        sudoku_results = SudokuResult.objects.filter(is_valid_solution=True).order_by('-created_at')
        sudoku_grids = [SudokuResultSerializer(result).data for result in sudoku_results]
        
        return Response({'sudoku_grids': sudoku_grids}, status=status.HTTP_200_OK)

   

    @action(detail=False, methods=['get'])
    def delete_all_sudoku(self, request):
        """
        Questo endpoint elimina tutti i Sudoku dal database.
        """
        SudokuResult.objects.all().delete()
        return Response({'message': 'Tutti i Sudoku sono stati eliminati dal database.'}, status=status.HTTP_204_NO_CONTENT)
    
    @action(detail=False, methods=['get'])
    def get_valid_sudoku(self, request):
        """
        Questo endpoint genera, salva nel database e restituisce una griglia di Sudoku valida.
        """
        sudoku_grid = self.generate_valid_sudoku()

        sudoku_result = SudokuResult.objects.create(
            sudoku_grid=sudoku_grid,
            is_valid_solution=True,  
            created_at=timezone.now()
        )
        sudoku_serializer = SudokuResultSerializer(sudoku_result)

        return Response(sudoku_serializer.data, status=status.HTTP_200_OK)

    def generate_valid_sudoku(self):
        """
        Questa funzione genera una griglia di Sudoku valida.
        """
        side = 9
        board = [[0 for _ in range(side)] for _ in range(side)]

        for i in range(side):
            for j in range(side):
                num = self.find_valid_number(board, i, j)
                board[i][j] = num

        return board

    def find_valid_number(self, board, row, col):
        """
        Trova un numero valido per la cella (row, col) nella griglia di Sudoku.
        """
        nums = list(range(1, 10))
        random.shuffle(nums)

        for num in nums:
            if self.is_valid_number(board, row, col, num):
                return num
        return 0

    def is_valid_number(self, board, row, col, num):
        """
        Verifica se il numero è valido per la cella (row, col) nella griglia di Sudoku.
        """
        for i in range(9):
            if board[row][i] == num or board[i][col] == num:
                return False

        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(start_row, start_row + 3):
            for j in range(start_col, start_col + 3):
                if board[i][j] == num:
                    return False

        return True
    
    @action(detail=False, methods=['put'])
    def update_sudoku(self, request):
        """
        Questo endpoint aggiorna i valori di una griglia di Sudoku.
        """
        pk = request.query_params.get('pk', None)
        sudoku_grid = request.data.get('sudoku_grid', None)

        if not pk:
            return Response({'message': 'Il campo pk è obbligatorio.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not sudoku_grid:
            return Response({'message': 'Il campo sudoku_grid è obbligatorio.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if len(sudoku_grid) != 9:
            return Response({'message': 'La griglia di Sudoku deve avere 9 righe.'}, status=status.HTTP_400_BAD_REQUEST)
        for row in sudoku_grid:
            if len(row) != 9:
                return Response({'message': 'Ogni riga della griglia di Sudoku deve avere 9 colonne.'}, status=status.HTTP_400_BAD_REQUEST)
        
        sudoku = self.get_grid_by_pk(pk)
        if not sudoku:
            return Response({'message': 'Il Sudoku con il pk specificato non esiste.'}, status=status.HTTP_404_NOT_FOUND)
        
        sudoku.sudoku_grid = sudoku_grid
        sudoku.is_valid_solution = self.is_valid_sudoku(sudoku_grid)
        sudoku.save()
        # se è valido o no
        if not sudoku.is_valid_solution:
            return Response({'message': 'Il Sudoku è stato aggiornato con successo, la soluzione non è valida.', 'sudoku_grid': sudoku_grid}, status=status.HTTP_200_OK)
        if sudoku.is_valid_solution:
            return Response({'message': 'Il Sudoku è stato aggiornato con successo, la soluzione è valida.', 'sudoku_grid': sudoku_grid}, status=status.HTTP_200_OK)
        
