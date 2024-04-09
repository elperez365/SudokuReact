import Cell from "./Cell";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";

interface BoardProps {
  key?: number;
}

const Board: React.FC<BoardProps> = () => {
  const { selectedBoard, boardRef } = useContext<GameContextType>(GameContext);
  const grid = selectedBoard.sudoku_grid;

  return (
    <form ref={boardRef} className="grid grid-cols-9 gap-1 mt-4">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={rowIndex * 9 + colIndex + cell * 9 + selectedBoard.pk}
            cell={cell}
          />
        ))
      )}
    </form>
  );
};

export default Board;
