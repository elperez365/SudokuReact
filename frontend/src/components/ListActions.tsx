import { useContext } from "react";
import Button from "./ui/Button";
import { GameContextType } from "../types/GameContext";
import { GameContext } from "../context/GameContext";
import { getValidSudoku, getClearSudokuList } from "@api/axios";
import { toast } from "react-toastify";
import { DUMMY_SUDOKU_LIST } from "../data/Dummy";
import useLocalStorage from "../hooks/useLocalStorage";
const ListActions: React.FC<{}> = () => {
  const { handleUpdateList } = useContext<GameContextType>(GameContext);
  const { setValue } = useLocalStorage("sudoku", {
    data: DUMMY_SUDOKU_LIST,
  });

  const updateLocalStorage = () => {
    setValue({ data: DUMMY_SUDOKU_LIST });
  };
  const handleAddValidSudoku = async () => {
    try {
      await getValidSudoku();
      updateLocalStorage();
      handleUpdateList();

      toast.success("Valid Sudoku Insert in the list!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearList = async () => {
    try {
      await getClearSudokuList();
      updateLocalStorage();
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
