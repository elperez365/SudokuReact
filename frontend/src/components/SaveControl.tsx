import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";

interface SaveControlProps {
  children: React.ReactNode;
}
const SaveControl: React.FC<SaveControlProps> = ({ children }) => {
  const { getCurrentBoardValues, selectedBoard } =
    useContext<GameContextType>(GameContext);

  const isBoardChanged = () => {
    const currentBoardValues = getCurrentBoardValues();
    return !selectedBoard.sudoku_grid.every((row, rowIndex) =>
      row.every(
        (cell, colIndex) => cell === currentBoardValues[rowIndex][colIndex]
      )
    );
  };

  return <>{isBoardChanged() && children}</>;
};

export default SaveControl;
