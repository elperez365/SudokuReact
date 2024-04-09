import { useContext } from "react";
import Button from "./ui/Button";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";

const ListActions: React.FC<{}> = () => {
  const { handleUpdateList } = useContext<GameContextType>(GameContext);

  return (
    <div className="flex gap-2">
      <Button color="tertiary" onClick={() => console.log("add Correct")}>
        Add Valid Sudoku
      </Button>
      <Button color="secondary" onClick={() => console.log("clear")}>
        Clear List
      </Button>
    </div>
  );
};

export default ListActions;
