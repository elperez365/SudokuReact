import { useContext } from "react";
import Board from "./components/Board";
import Sudokulist from "./components/SudokuList";
import { GameContext } from "./context/GameContext";
import { GameContextType } from "./types/GameContext";
import GameActions from "./components/GameActions";

function App() {
  const { reset } = useContext<GameContextType>(GameContext);

  return (
    <div className="flex flex-col gap-5 p-7">
      <GameActions />

      <Board key={reset ? 0 : 1} />

      <Sudokulist />
    </div>
  );
}

export default App;
