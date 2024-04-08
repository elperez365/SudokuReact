import Cell from "./Cell";
import { DUMMY_GRID } from "../data/Dummy";
import { forwardRef } from "react";
import { BoardRef } from "src/types/Refs";

interface BoardProps {
  grid?: number[][];
}

const Board = forwardRef<BoardRef, BoardProps>(({ grid = DUMMY_GRID }, ref) => {
  return (
    <form ref={ref} className="grid grid-cols-9 gap-1 mt-4">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell key={rowIndex * 9 + colIndex} cell={cell} />
        ))
      )}
    </form>
  );
});

export default Board;
