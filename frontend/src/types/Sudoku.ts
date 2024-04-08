export type Sudoku = {
  pk: number;
  sudoku_grid: number[][];
  is_valid_solution: boolean;
};

export type SudokuList = {
  sudoku_grids: Sudoku[];
};
