import { createContext, useCallback, useRef, useState } from "react";
import { DUMMY_SUDOKU } from "../data/Dummy";
import { BoardRef } from "../types/Refs";
import { Sudoku } from "../types/Sudoku";
import { getBoardValues } from "../utils/BoardFunctions";
import { GameContextData, GameContextType } from "../types/GameContext";

export const GameContext = createContext<GameContextType>(
  new GameContextData()
);

interface GameContextProviderProps {
  children: React.ReactNode;
}

const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [selectedBoard, setSelectedBoard] = useState<Sudoku>(DUMMY_SUDOKU);
  const [reset, setReset] = useState<boolean>(false);
  const boardRef: BoardRef = useRef<HTMLFormElement>(null);

  const handleSetBoard = useCallback((sudoku: Sudoku) => {
    setSelectedBoard(sudoku);
  }, []);

  const handleReset = useCallback(() => {
    setReset(!reset);
  }, [reset]);

  const getCurrentBoardValues = useCallback(() => {
    return getBoardValues(boardRef);
  }, [boardRef]);

  const contextData: GameContextType = {
    selectedBoard,
    reset,
    boardRef,
    handleSetBoard,
    handleReset,
    getCurrentBoardValues,
  };

  return (
    <GameContext.Provider value={contextData}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
