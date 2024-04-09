import axios from "axios";
import { Sudoku, SudokuList } from "src/types/Sudoku";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function postSudoku(sudokuGrid: number[][]) {
  return await axios.post<{ message: string; sudoku_grid: number[][] }>(
    `${baseURL}/sudoku/`,
    {
      sudoku_grid: sudokuGrid,
    }
  );
}

export async function getSudokuList() {
  return await axios.get<{ sudoku_grids: SudokuList }>(
    `${baseURL}/sudoku/get_sudoku_grids/`
  );
}

export async function getValidSudoku() {
  return await axios.get<Sudoku>(`${baseURL}/sudoku/get_valid_sudoku/`);
}

export async function getRandomSudoku() {
  return await axios.get<Sudoku>(
    `${baseURL}/sudoku/generate_random_sudoku_grid/`
  );
}

export async function getClearSudokuList() {
  return await axios.get<{ message: string }>(
    `${baseURL}/sudoku/delete_all_sudoku/`
  );
}
