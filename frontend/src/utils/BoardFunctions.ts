import { BoardRef } from "src/types/Refs";

export const getBoardValues = (boardRef: BoardRef) => {
  if (boardRef.current) {
    const boardInputs =
      boardRef.current.querySelectorAll<HTMLInputElement>("#cell");
    const values: number[][] = [];
    for (let i = 0; i < 9; i++) {
      const row: number[] = [];
      for (let j = 0; j < 9; j++) {
        row.push(parseInt(boardInputs[i * 9 + j].value));
      }
      values.push(row);
    }
    console.log(values);

    return values;
  }
};
