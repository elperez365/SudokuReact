import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function postSudoku(sudokuGrid: number[][]) {
  return await axios.post<{ message: string; sudoku_grid: number[][] }>(
    `${baseURL}/sudoku/`,
    {
      sudoku_grid: sudokuGrid,
    }
  );
}
