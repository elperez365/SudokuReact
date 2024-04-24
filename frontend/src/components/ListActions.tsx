import { useContext } from "react";
import Button from "./ui/Button";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import { getValidSudoku, getClearSudokuList } from "@api/axios";
import { toast } from "react-toastify";
const ListActions: React.FC<{}> = () => {
  const { handleUpdateList } = useContext<GameContextType>(GameContext);

  const handleAddValidSudoku = async () => {
    try {
      await getValidSudoku();
      handleUpdateList();
      toast.success("Valid Sudoku Insert in the list!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearList = async () => {
    try {
      await getClearSudokuList();
      handleUpdateList();
      toast.success("List Cleared!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2">
      <Button color="tertiary" onClick={() => handleAddValidSudoku()}>
        Generate Valid Sudoku
      </Button>
      <Button color="secondary" onClick={() => handleClearList()}>
        Clear List
      </Button>
    </div>
  );
};

export default ListActions;
