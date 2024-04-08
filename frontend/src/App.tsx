import { useRef } from "react";
import Board from "./components/Board";

function App() {
  const boardRef = useRef<HTMLFormElement>(null);

  const getBoardValues = () => {
    if (boardRef.current) {
      const boardInputs =
        boardRef.current.querySelectorAll<HTMLInputElement>("#cell");
      const values: number[][] = [];
      for (let i = 0; i < 9; i++) {
        const row: number[] = [];
        for (let j = 0; j < 9; j++) {
          row.push(parseInt(boardInputs[i * 9 + j].value));
        }
        values.push(row);
      }
      console.log(values);

      return values;
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <Board ref={boardRef} />
      </div>
      <button onClick={() => getBoardValues()}>getValues</button>
    </>
  );
}

export default App;
