import { useContext, useState } from "react";
import { Sudoku } from "src/types/Sudoku";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";

interface SudokuListProps {}

const Sudokulist: React.FC<SudokuListProps> = () => {
  const { handleSetBoard } = useContext<GameContextType>(GameContext);

  const [sudokuList, setSudokuList] = useState<Sudoku[]>(
    DUMMY_SUDOKU_LIST.sudoku_grids
  );

  return (
    <div>
      <h1>Sudoku List</h1>
      <ul>
        {sudokuList.map((sudoku) => (
          <li key={sudoku.pk}>
            <p onClick={() => handleSetBoard(sudoku)}>{sudoku.pk}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sudokulist;
