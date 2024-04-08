import { useRef } from "react";
import Board from "./components/Board";
import { BoardRef } from "./types/Refs";
import { getBoardValues } from "./utils/BoardFunctions";

function App() {
  const boardRef: BoardRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className=" flex justify-center items-center">
        <Board ref={boardRef} />
      </div>
      <button onClick={() => getBoardValues(boardRef)}>getValues</button>
    </>
  );
}

export default App;
