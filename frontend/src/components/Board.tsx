import { useState } from "react";
import { Sudoku } from "src/types/Sudoku";
import { DUMMY_SUDOKU } from "../data/Dummy";
import Cell from "./Cell";

export default function Board() {
  const [sudoku, setSudoku] = useState<Sudoku>(DUMMY_SUDOKU);
  const grid: number[][] = sudoku.sudoku_grid;

  function handleCellChange(row: number, col: number, value: number) {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setSudoku((prevSudoku) => ({
      ...prevSudoku,
      sudoku_grid: newGrid,
    }));
  }

  return (
    <div className="grid grid-cols-9 gap-1 mt-4">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={rowIndex * 9 + colIndex}
            cell={cell}
            rowIndex={rowIndex}
            colIndex={colIndex}
            handleCellChange={handleCellChange}
          />
        ))
      )}
    </div>
  );
}
