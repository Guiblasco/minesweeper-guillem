import { Board } from "../board/types.js";
import { getRandomBoolean } from "../utils/utils.js";
import { Cell } from "./types";

export const createCell = (): Cell => {
  const cell: Cell = {
    hasMine: getRandomBoolean(),
    neighboursMinesCount: 0,
  };

  return cell;
};

export const getNeighboursMinesCount = (
  board: Board,
  cellPositionColumn: number,
  cellPositionRow: number
): number => {
  let minesCount = 0;
  const boardPositions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [columnPosition, rowPosition] of boardPositions) {
    if (
      cellPositionColumn + columnPosition < 0 ||
      cellPositionColumn + columnPosition > board.cells.length - 1
    ) {
      continue;
    }
    if (
      cellPositionRow + rowPosition < 0 ||
      cellPositionRow + rowPosition > board.cells.length - 1
    ) {
      continue;
    }

    const ownerMine =
      board.cells[cellPositionColumn + columnPosition][
        cellPositionRow + rowPosition
      ];

    if (ownerMine.hasMine) {
      minesCount++;
    }
  }

  return minesCount;
};
