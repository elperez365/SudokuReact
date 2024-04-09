import { useCallback, useState } from "react";

interface CellProps {
  cell: number;
}

const Cell: React.FC<CellProps> = ({ cell }) => {
  const [value, setValue] = useState<number>(cell);

  const ControlMinMaxValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let controlledValue: number = 0;
      const value = e.target.value;

      if (value === "") {
        controlledValue = 0;
      }
      if (+value < 0) {
        controlledValue = 0;
      }
      if (+value > 9) {
        controlledValue = +value[0];
      }
      if (+value > 0 && +value < 10) {
        controlledValue = parseInt(value);
      }
      if (value.length > 2 && value[0] === "0") {
        controlledValue = 0;
      }

      return controlledValue;
    },
    []
  );

  return (
    <input
      id="cell"
      value={value}
      onChange={(e) => setValue(ControlMinMaxValue(e))}
      onFocus={(e) => e.target.select()}
      className="w-8 h-8 sm:w-10 sm:h-10 text-center border border-gray-400 rounded hover:bg-gray-200 focus:outline-none cursor-pointer"
    />
  );
};

export default Cell;
