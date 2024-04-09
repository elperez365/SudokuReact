import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { getRandomBoard, postSudoku, updateSudoku } from "@api/axios";
import { Sudoku } from "src/types/Sudoku";

const GameActions = () => {
  const {
    handleReset,
    getCurrentBoardValues,
    handleSetBoard,
    selectedBoard,
    handleUpdateList,
  } = useContext<GameContextType>(GameContext);

  const handleGenerateRandomBoard = async () => {
    try {
      const data = await getRandomBoard();
      const newBoard: number[][] = data.data.sudoku_grid;
      const newSudokuWithoutPK: Sudoku = {
        sudoku_grid: newBoard,
        is_valid_solution: false,
        pk: 0,
      };
      handleSetBoard(newSudokuWithoutPK);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveBoard = async () => {
    if (!!selectedBoard.pk) {
      try {
        const data = await updateSudoku(
          selectedBoard.pk,
          getCurrentBoardValues()
        );
        handleUpdateList();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const data = await postSudoku(getCurrentBoardValues());
        handleUpdateList();
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
          Save
        </Button>

        <Button color="primary" onClick={() => handleGenerateRandomBoard()}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GameActions;
