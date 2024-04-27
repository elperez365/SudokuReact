import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { getRandomBoard, postSudoku, updateSudoku } from "@api/axios";
import { DUMMY_SUDOKU, DUMMY_SUDOKU_LIST } from "../data/Dummy";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const GameActions = () => {
  const {
    handleReset,
    getCurrentBoardValues,
    selectedBoard,
    handleUpdateList,
    handleSetBoard,
  } = useContext<GameContextType>(GameContext);

  const { setValue } = useLocalStorage("sudoku", {
    data: DUMMY_SUDOKU_LIST,
  });

  const updateLocalStorage = () => {
    setValue({ data: DUMMY_SUDOKU_LIST });
  };

  const handleGenerateRandomBoard = async () => {
    try {
      const data = await getRandomBoard();
      updateLocalStorage();
      data && handleUpdateList();

      toast.success("Random Sudoku Insert in the list!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveBoard = async () => {
    const currentBoardValues = getCurrentBoardValues() ?? [];
    if (!!selectedBoard.pk) {
      try {
        const data = await updateSudoku(selectedBoard.pk, currentBoardValues);
        updateLocalStorage();
        handleUpdateList();

        toast.success("Sudoku Updated ");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const data = await postSudoku(currentBoardValues);
        updateLocalStorage();
        handleUpdateList();

        toast.success("Sudoku Inserted in the list!");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Title>Game Actions</Title>
      <div className="flex gap-2">
        <Button color="secondary" onClick={() => handleReset()}>
          Clear
        </Button>

        <Button color="tertiary" onClick={() => handleSaveBoard()}>
          Validate & Save
        </Button>

        <Button color="primary" onClick={() => handleGenerateRandomBoard()}>
          Generate Random Sudoku
        </Button>
        <Button color="primary" onClick={() => handleSetBoard(DUMMY_SUDOKU)}>
          New Custom Sudoku
        </Button>
      </div>
    </div>
  );
};

export default GameActions;
