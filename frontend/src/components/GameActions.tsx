import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import Button from "./ui/Button";

const GameActions = () => {
  const { handleReset, getCurrentBoardValues } =
    useContext<GameContextType>(GameContext);

  return (
    <div className="flex gap-2">
      <Button color="secondary" onClick={() => handleReset()}>
        Reset
      </Button>
      <Button color="tertiary" onClick={() => getCurrentBoardValues()}>
        Save
      </Button>
    </div>
  );
};

export default GameActions;
