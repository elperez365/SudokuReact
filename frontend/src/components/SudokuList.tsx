import { useContext } from "react";
import { Sudoku } from "src/types/Sudoku";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import ListItem from "./ListItem";
import Title from "./ui/Title";
import { getSudokuList } from "@api/axios";
import useGet from "../hooks/useGet";
import ListActions from "./ListActions";

interface SudokuListProps {
  key: number;
}

const Sudokulist: React.FC<SudokuListProps> = () => {
  const { handleSetBoard } = useContext<GameContextType>(GameContext);

  const { data, loading, error } = useGet(getSudokuList);

  const sudokuList = data?.data.sudoku_grids;
  console.log(sudokuList);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <Title>Sudoku List</Title>

      <ListActions />

      {sudokuList && !sudokuList.length && <p>No Sudoku available</p>}

      <ul className="flex flex-col gap-2">
        {sudokuList?.map((sudoku: Sudoku) => (
          <ListItem
            key={sudoku.pk}
            pk={sudoku.pk}
            isValid={sudoku.is_valid_solution}
            onSetBoard={() => handleSetBoard(sudoku)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sudokulist;
