import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";
import Button from "./ui/Button";
import Title from "./ui/Title";

const GameActions = () => {
  const { handleReset, getCurrentBoardValues } =
    useContext<GameContextType>(GameContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <Title>Board Actions</Title>
      <div className="flex gap-2">
        <Button color="secondary" onClick={() => handleReset()}>
          Clear
        </Button>
        <Button color="tertiary" onClick={() => getCurrentBoardValues()}>
          Save
        </Button>
        <Button color="primary" onClick={() => console.log("generate")}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GameActions;
