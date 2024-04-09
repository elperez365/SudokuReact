import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextType } from "../types/GameContext";

interface ListItemProps {
  pk: number;
  isValid?: boolean;
  onSetBoard: () => void;
  key?: number;
}

const ListItem: React.FC<ListItemProps> = ({ pk, isValid, onSetBoard }) => {
  const { selectedBoard } = useContext<GameContextType>(GameContext);

  const bgCondition = isValid ? "bg-green-300" : "bg-red-300";
  const isSelected = selectedBoard.pk === pk;
  const borderCondition = isSelected ? "border-2 border-black" : "";
  return (
    <li
      className={`${bgCondition} ${borderCondition} flex p-2 w-32 justify-around gap-2 hover:bg-amber-500 rounded cursor-pointer `}
      onClick={() => onSetBoard()}
    >
      <p className="w-1/3">{pk}</p>
      <p className="w-2/3 text-start">{isValid ? "Correct" : "Incorrect"}</p>
    </li>
  );
};

export default ListItem;
