import { useContext, useState } from "react";
import { Sudoku } from "src/types/Sudoku";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import ListItem from "./ListItem";
import Button from "./ui/Button";
import Title from "./ui/Title";

interface SudokuListProps {}

const Sudokulist: React.FC<SudokuListProps> = () => {
  const { handleSetBoard } = useContext<GameContextType>(GameContext);

  const [sudokuList, setSudokuList] = useState<Sudoku[]>(
    DUMMY_SUDOKU_LIST.sudoku_grids
  );

  return (
    <div className="flex flex-col gap-2 items-center">
      <Title>Sudoku List</Title>
      <div className="flex gap-2">
        <Button color="primary" onClick={() => console.log("add Incorrect")}>
          Add Incorrect
        </Button>
        <Button color="tertiary" onClick={() => console.log("add Correct")}>
          Add Correct
        </Button>
        <Button color="secondary" onClick={() => console.log("clear")}>
          Clear List
        </Button>
      </div>
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
