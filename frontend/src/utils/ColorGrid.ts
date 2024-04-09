export const colorCell = (rowIndex: number, colIndex: number): string => {
  const row = Math.floor(rowIndex / 3);
  const col = Math.floor(colIndex / 3);
  return row % 2 === col % 2 ? "bg-gray-400" : "bg-gray-200";
};
