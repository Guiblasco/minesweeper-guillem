export type Cell = {
  neighboursCount: number;
  hasMine: boolean;
};

export type Board = {
  cells: Cell[][];
};
