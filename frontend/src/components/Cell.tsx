import { useCallback, useState } from "react";
import { ControlMinMaxValue } from "../utils/CellFunctions";

interface CellProps {
  cell: number;
  color: string;
}

const Cell: React.FC<CellProps> = ({ cell, color }) => {
  const [value, setValue] = useState<number>(cell);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <input
      id="cell"
      value={value}
      onChange={(e) => setValue(ControlMinMaxValue(e))}
      onFocus={(e) => {
        e.target.select();
        setIsFocused(true);
      }}
      onBlur={() => setIsFocused(false)}
      className={` ${
        isFocused ? "bg-orange-300" : color
      } w-8 h-8 sm:w-10 sm:h-10 text-center border border-gray-400 rounded hover:bg-orange-300 focus:outline-none cursor-pointer`}
    />
  );
};

export default Cell;
