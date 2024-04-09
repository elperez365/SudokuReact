import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { getRandomBoard, postSudoku, updateSudoku } from "@api/axios";

const GameActions = () => {
  const {
    handleReset,
    getCurrentBoardValues,
    selectedBoard,
    handleUpdateList,
  } = useContext<GameContextType>(GameContext);

  const handleGenerateRandomBoard = async () => {
    try {
      const data = await getRandomBoard();
      data && handleUpdateList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveBoard = async () => {
    const currentBoardValues = getCurrentBoardValues() ?? [];
    if (!!selectedBoard.pk) {
      try {
        const data = await updateSudoku(selectedBoard.pk, currentBoardValues);
        handleUpdateList();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const data = await postSudoku(currentBoardValues);
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
          Validate & Save
        </Button>

        <Button color="primary" onClick={() => handleGenerateRandomBoard()}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GameActions;
