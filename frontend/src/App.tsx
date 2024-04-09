import { useContext } from "react";
import Board from "./components/Board";
import Sudokulist from "./components/SudokuList";
import { GameContext } from "./context/GameContext";
import { GameContextType } from "./types/GameContext";
import GameActions from "./components/GameActions";

function App() {
  const { reset } = useContext<GameContextType>(GameContext);

  return (
    <>
      <GameActions />

      <Board key={reset ? 0 : 1} />

      <Sudokulist />
    </>
  );
}

export default App;
