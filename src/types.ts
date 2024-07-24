export type Cell = {
  countNeighbours: number;
  hasMine: boolean;
};

export type Board = {
  cells: Cell[][];
};
