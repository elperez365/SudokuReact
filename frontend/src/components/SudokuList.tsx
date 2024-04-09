import { useContext, useEffect } from "react";
import { Sudoku } from "src/types/Sudoku";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import ListItem from "./ListItem";
import Title from "./ui/Title";
import { getSudokuList } from "@api/axios";
import useGet from "../hooks/useGet";
import ListActions from "./ListActions";
import Loading from "./ui/Loading";

interface SudokuListProps {
  key: string;
}

const Sudokulist: React.FC<SudokuListProps> = () => {
  const { handleSetBoard, selectedBoard } =
    useContext<GameContextType>(GameContext);

  const { data, loading, error } = useGet(getSudokuList);

  const sudokuList = data?.data.sudoku_grids;

  useEffect(() => {
    if (sudokuList?.length > 0 && selectedBoard?.pk === 0) {
      handleSetBoard(sudokuList[sudokuList.length - 1]);
    }
    if (selectedBoard?.pk !== 0) {
      const boardindex = sudokuList?.findIndex(
        (sudoku: Sudoku) => sudoku?.pk === selectedBoard?.pk
      );
      boardindex && handleSetBoard(sudokuList[boardindex]);
    }
  }, [sudokuList]);

  if (loading) {
    return <Loading />;
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
        {sudokuList
          ?.sort((a: Sudoku, b: Sudoku) => b.pk - a.pk)
          .map((sudoku: Sudoku) => (
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
