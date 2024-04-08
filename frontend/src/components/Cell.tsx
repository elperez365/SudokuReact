interface CellProps {
  cell: number;
  rowIndex: number;
  colIndex: number;
  handleCellChange: (rowIndex: number, colIndex: number, value: number) => void;
}

const Cell: React.FC<CellProps> = ({
  cell,
  rowIndex,
  colIndex,
  handleCellChange,
}) => {
  const ControlMinMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let controlledValue: number = 0;
    if (e.target.value === "") {
      controlledValue = 0;
    }
    if (parseInt(e.target.value) < 0) {
      controlledValue = 0;
    }
    if (parseInt(e.target.value) > 9) {
      controlledValue = +e.target.value[0];
    }
    if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 10) {
      controlledValue = parseInt(e.target.value);
    }
    return controlledValue;
  };

  return (
    <input
      key={rowIndex * 9 + colIndex}
      type="number"
      min="1"
      max="9"
      value={cell === 0 ? "" : cell}
      onChange={(e) =>
        handleCellChange(rowIndex, colIndex, ControlMinMaxValue(e))
      }
      className="w-10 h-10 text-center border border-gray-400 rounded"
    />
  );
};

export default Cell;
