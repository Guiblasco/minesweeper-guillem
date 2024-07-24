import { Board } from "./types";

const createSquareBoard = (dimension: number): Board => {
  const squareBoard: Board = {
    cells: [],
  };

  for (let column = 0; column < dimension; column++) {
    squareBoard.cells.push([]);
    for (let row = 0; row < dimension; row++) {
      squareBoard.cells[column].push({ hasMine: false, neighboursCount: 0 });
    }
  }

  return squareBoard;
};

console.log(createSquareBoard(6));
