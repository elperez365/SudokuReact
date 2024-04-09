import { useContext } from "react";
import Board from "./components/Board";
import Sudokulist from "./components/SudokuList";
import { GameContext } from "./context/GameContext";
import { GameContextType } from "./types/GameContext";

function App() {
  const { reset, handleReset, getCurrentBoardValues } =
    useContext<GameContextType>(GameContext);

  return (
    <>
      <div className=" flex justify-center items-center">
        <Board key={reset ? 0 : 1} />
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
      <Sudokulist />
    </>
  );
}

export default App;
