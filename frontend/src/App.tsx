import { useRef, useState } from "react";
import Board from "./components/Board";
import { BoardRef } from "./types/Refs";
import { getBoardValues } from "./utils/BoardFunctions";
import Sudokulist from "./components/SudokuList";
import { Sudoku } from "./types/Sudoku";
import { DUMMY_SUDOKU } from "./data/Dummy";

function App() {
  const [selectedBoard, setSelectedBoard] = useState<Sudoku>(DUMMY_SUDOKU);
  const [reset, setReset] = useState<boolean>(false);
  const boardRef: BoardRef = useRef<HTMLFormElement>(null);

  const handleSetBoard = (sudoku: Sudoku) => {
    setSelectedBoard(sudoku);
  };

  const handleReset = () => {
    setReset(!reset);
  };

  const getCurrentBoardValues = () => {
    return getBoardValues(boardRef);
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <Board
          key={reset ? 1 : 2 || selectedBoard.pk}
          ref={boardRef}
          grid={selectedBoard.sudoku_grid}
        />
      </div>
      <button
        className="bg-zinc-700 text-white p-2 rounded-md mt-4 w-full"
        onClick={() => getCurrentBoardValues()}
      >
        getValues
      </button>
      <button
        className="bg-zinc-700 text-white p-2 rounded-md mt-4 w-full"
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <Sudokulist onSet={handleSetBoard} />
    </>
  );
}

export default App;
