import { getRandomBoolean } from "../utils/utils.js";
import { Cell } from "./types";

export const createCell = (): Cell => {
  const cell: Cell = {
    hasMine: getRandomBoolean(),
    neighboursCount: 0,
  };

  return cell;
};
