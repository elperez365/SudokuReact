import { useMutation } from "react-query";
import { postSudoku } from "@api/axios";

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
      <div>
        <h1 className="text-4xl text-gray-900 font-bold leading-loose">
          You can start by editing App.tsx
        </h1>
        <h2 className="text-2xl text-gray-600">Glhf ❤️</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sudokuMutation.mutate(fakeGrid());
          }}
        >
          <button className="mt-4 rounded-2xl px-4 py-3 font-semibold bg-black text-white">
            Send random Sudoku
          </button>
          {sudokuMutation.isLoading && <p>Loading...</p>}
          {sudokuMutation.isError && <p>Error: {"" + sudokuMutation.error}</p>}
          {sudokuMutation.isSuccess && (
            <p>Success: {sudokuMutation.data.data.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
