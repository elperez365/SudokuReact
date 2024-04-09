import { DUMMY_SUDOKU } from "../data/Dummy";
import { BoardRef } from "./Refs";
import { Sudoku } from "./Sudoku";

export interface GameContextType {
  selectedBoard: Sudoku;
  reset: boolean;
  boardRef: BoardRef;
  updateList: boolean;
  handleSetBoard: (sudoku: Sudoku) => void;
  handleReset: () => void;
  handleUpdateList: () => void;
  getCurrentBoardValues: () => number[][];
}

export class GameContextData implements GameContextType {
  selectedBoard = DUMMY_SUDOKU;
  reset = false;
  boardRef = { current: null };
  updateList = false;
  handleSetBoard = () => {};
  handleReset = () => {};
  handleUpdateList = () => {};
  getCurrentBoardValues = () => [];
}
