import Cell from "./Cell";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import { colorCell } from "../utils/ColorGrid";
import Title from "./ui/Title";

interface BoardProps {
  key?: string;
}

const Board: React.FC<BoardProps> = () => {
  const { selectedBoard, boardRef } = useContext<GameContextType>(GameContext);
  const grid = selectedBoard && selectedBoard.sudoku_grid;

  return (
    <div className=" flex flex-col items-center justify-center bg-amber-100 rounded p-4">
      {!!selectedBoard?.pk && <Title>Current PK {selectedBoard.pk}</Title>}
      {selectedBoard?.is_valid_solution ? (
        <Title color="green">Valid </Title>
      ) : (
        <Title color="red">Not Valid </Title>
      )}
      <form ref={boardRef} className="grid grid-cols-9 gap-1 mt-4">
        {grid?.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={rowIndex * 9 + colIndex + cell * 9 + selectedBoard.pk}
              cell={cell}
              color={colorCell(rowIndex, colIndex)}
            />
          ))
        )}
      </form>
    </div>
  );
};

export default Board;
