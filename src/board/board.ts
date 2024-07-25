import { Board } from "./types";
import { createCell } from "../cell/cell.js";

const createSquareBoard = (dimension: number): Board => {
  const squareBoard: Board = {
    cells: [],
  };

  for (let column = 0; column < dimension; column++) {
    squareBoard.cells.push([]);
    for (let row = 0; row < dimension; row++) {
      squareBoard.cells[column].push(createCell());
    }
  }

  return squareBoard;
};

createSquareBoard(5);
