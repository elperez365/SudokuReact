const duplicateExist = (sudoku, row, col) => {
  let number = sudoku[row][col];
  for (let i = 0; i < 9; i++) {
    if (sudoku[row][i] === number && i !== col) {
      return true;
    }
    if (sudoku[i][col] === number && i !== row) {
      return true;
    }
  }
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (sudoku[i][j] === number && i !== row && j !== col) {
        return true;
      }
    }
  }
  return false;
};

export const getRandomSudokuBoard9x9 = () => {
  let numAdded = 0;
  let displayedNumbers = 30;
  let sudoku = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
  while (numAdded < displayedNumbers) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    let number = Math.floor(Math.random() * 9) + 1;

    if (sudoku[row][col] === null) {
      sudoku[row][col] = number;
      if (duplicateExist(sudoku, row, col)) {
        sudoku[row][col] = null;
        continue;
      }
      numAdded++;
    }
  }
  console.log(sudoku);
  return sudoku;
};

export const isSudokuValid = (sudoku) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === null) {
        return false;
      }
      if (duplicateExist(sudoku, i, j)) {
        return false;
      }
    }
  }
  return true;
};

export const generateValidSolutionSudoku9x9 = () => {
  let sudoku = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
  let row = 0;
  let col = 0;
  let number = 1;
  while (row < 9) {
    if (col === 9) {
      row++;
      col = 0;
      continue;
    }
    if (number === 10) {
      sudoku[row][col] = null;
      col--;
      number = sudoku[row][col] + 1;
      continue;
    }
    sudoku[row][col] = number;
    if (duplicateExist(sudoku, row, col)) {
      number++;
      continue;
    }
    col++;
    number = 1;
  }
  return sudoku;
};
