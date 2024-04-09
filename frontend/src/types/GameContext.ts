import { DUMMY_SUDOKU } from "../data/Dummy";
import { BoardRef } from "./Refs";
import { Sudoku } from "./Sudoku";

export interface GameContextType {
  selectedBoard: Sudoku;
  reset: boolean;
  boardRef: BoardRef;
  handleSetBoard: (sudoku: Sudoku) => void;
  handleReset: () => void;
  getCurrentBoardValues: () => number[][] | undefined;
}

export class GameContextData implements GameContextType {
  selectedBoard = DUMMY_SUDOKU;
  reset = false;
  boardRef = { current: null };
  handleSetBoard = () => {};
  handleReset = () => {};
  getCurrentBoardValues = () => [];
}
