import { useState } from "react";
import { Sudoku } from "src/types/Sudoku";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";

interface SudokuListProps {
  onSet: (sudoku: Sudoku) => void;
}

const Sudokulist: React.FC<SudokuListProps> = ({ onSet }) => {
  const [sudokuList, setSudokuList] = useState<Sudoku[]>(
    DUMMY_SUDOKU_LIST.sudoku_grids
  );

  return (
    <div>
      <h1>Sudoku List</h1>
      <ul>
        {sudokuList.map((sudoku) => (
          <li key={sudoku.pk}>
            <p onClick={() => onSet(sudoku)}>{sudoku.pk}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sudokulist;
