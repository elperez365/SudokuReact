import { useContext, useState } from "react";
import { Sudoku } from "src/types/Sudoku";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import ListItem from "./ListItem";

interface SudokuListProps {}

const Sudokulist: React.FC<SudokuListProps> = () => {
  const { handleSetBoard } = useContext<GameContextType>(GameContext);

  const [sudokuList, setSudokuList] = useState<Sudoku[]>(
    DUMMY_SUDOKU_LIST.sudoku_grids
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold  p-2">Sudoku List</h1>
      <ul className="flex flex-col gap-2">
        {sudokuList.map((sudoku) => (
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
