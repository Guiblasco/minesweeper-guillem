import { Board } from "./types";
import { createCell, getNeighboursMinesCount } from "../cell/cell.js";

export const createSquareBoard = (dimension: number): Board => {
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

const board = createSquareBoard(8);

board.cells.forEach((cells, columnCellPosition) => {
  cells.forEach((cell, rowCellPosition) => {
    cell.neighboursMinesCount = getNeighboursMinesCount(
      board,
      columnCellPosition,
      rowCellPosition
    );
  });
});
