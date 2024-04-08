import { useMutation } from "react-query";
import { postSudoku } from "@api/axios";
import Board from "./components/Board";

function App() {
  // Example, you can start by editing this component

  // This is a mutation that sends a random Sudoku grid to the backend
  const sudokuMutation = useMutation(postSudoku, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  function fakeGrid() {
    const grid = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => Math.floor(Math.random() * 9) + 1)
    );
    return grid;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Board />
    </div>
  );
}

export default App;
