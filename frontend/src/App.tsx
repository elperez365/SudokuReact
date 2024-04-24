import { useContext } from "react";
import Board from "./components/Board";
import Sudokulist from "./components/SudokuList";
import { GameContext } from "./context/GameContext";
import { GameContextType } from "./types/GameContext";
import GameActions from "./components/GameActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { reset, updateList } = useContext<GameContextType>(GameContext);

  return (
    <div className="flex flex-col gap-5 p-7">
      <ToastContainer />
      <GameActions />

      <Board key={reset ? "resetBoard" : "!resetBoard!"} />

      <Sudokulist key={updateList ? "updateList" : "!updateList!"} />
    </div>
  );
}

export default App;
