import axios from "axios";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";
import { Sudoku, SudokuList } from "../types/Sudoku";
import {
  generateValidSolutionSudoku9x9,
  getRandomSudokuBoard9x9,
  isSudokuValid,
} from "../utils/SudokuFunctions";
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function postSudoku(sudokuGrid: number[][]) {
  // const response = await axios.post<{
  // message: string;
  //sudoku_grid: number[][];
  //}>(`${baseURL}/sudoku/`, {
  // sudoku_grid: sudokuGrid,
  //});

  const isValid = isSudokuValid(sudokuGrid);
  const newPK =
    DUMMY_SUDOKU_LIST.sudoku_grids.reduce((acc, sudoku) => {
      return acc > sudoku.pk ? acc : sudoku.pk;
    }, 0) + 1;
  DUMMY_SUDOKU_LIST.sudoku_grids.push({
    pk: newPK,
    sudoku_grid: sudokuGrid,
    is_valid_solution: isValid,
  });

  return { message: "ok" };
}

export async function getSudokuList(): Promise<{ data: SudokuList }> {
  //const response= await axios.get<{ sudoku_grids: SudokuList }>(
  // `${baseURL}/sudoku/get_sudoku_grids/`
  // );
  const mockPromise = new Promise<{ data: SudokuList }>((resolve) => {
    setTimeout(() => {
      resolve({ data: DUMMY_SUDOKU_LIST });
    }, 1000);
  });

  return mockPromise;
}

export async function getValidSudoku() {
  //const response =await axios.get<Sudoku>(`${baseURL}/sudoku/get_valid_sudoku/`);

  const mockPromise = new Promise<Sudoku>((resolve) => {
    const sudoku = generateValidSolutionSudoku9x9();
    const newPK =
      DUMMY_SUDOKU_LIST.sudoku_grids.reduce((acc, sudoku) => {
        return acc > sudoku.pk ? acc : sudoku.pk;
      }, 0) + 1;
    DUMMY_SUDOKU_LIST.sudoku_grids.push({
      pk: newPK,
      sudoku_grid: sudoku,
      is_valid_solution: true,
    });
    setTimeout(() => {
      resolve({ sudoku_grid: sudoku, is_valid_solution: true, pk: newPK });
    }, 1000);
  });

  return mockPromise;
}

export async function getRandomBoard(): Promise<any> {
  //const response = await axios.get<Sudoku>(
  // `${baseURL}/sudoku/generate_random_sudoku_grid/`
  //);

  const mockPromise = new Promise<any>((resolve) => {
    const sudoku = getRandomSudokuBoard9x9();
    // cerca il pk più alto e incrementalo di 1
    const newPK =
      DUMMY_SUDOKU_LIST.sudoku_grids.reduce((acc, sudoku) => {
        return acc > sudoku.pk ? acc : sudoku.pk;
      }, 0) + 1;
    DUMMY_SUDOKU_LIST.sudoku_grids.push({
      pk: newPK,
      sudoku_grid: sudoku,
      is_valid_solution: false,
    });

    setTimeout(() => {
      resolve({ message: "ok" });
    }, 1000);
  });

  console.log(DUMMY_SUDOKU_LIST);

  return mockPromise;
}

export async function getClearSudokuList() {
  //const response = await axios.get<{ message: string }>(
  //  `${baseURL}/sudoku/delete_all_sudoku/`,
  //);

  DUMMY_SUDOKU_LIST.sudoku_grids = [];

  return { message: "ok" };
}

export async function updateSudoku(pk: number, sudokuGrid: number[][]) {
  // const response = await axios.put<{
  //   message: string;
  //   sudoku_grid: number[][];
  // }>(`${baseURL}/sudoku/update_sudoku/?pk=${pk}`, {
  //    sudoku_grid: sudokuGrid,
  // });

  //controlla se il sudoku è valido
  const isValid = isSudokuValid(sudokuGrid);

  DUMMY_SUDOKU_LIST.sudoku_grids = DUMMY_SUDOKU_LIST.sudoku_grids.map(
    (sudoku) => {
      if (sudoku.pk === pk) {
        return {
          ...sudoku,
          sudoku_grid: sudokuGrid,
          is_valid_solution: isValid,
        };
      }
      return sudoku;
    }
  );
  return { message: "ok" };
}
