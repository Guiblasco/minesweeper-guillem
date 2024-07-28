import { getNeighboursMinesCount } from "./cell";
import { createSquareBoard } from "../board/board";

describe("Given function getNeighboursMinesCount()", () => {
  describe("When it recives a Board and 2 positions on it", () => {
    test("Then it should returns how many neighbour mines are ", () => {
      const board = createSquareBoard(3);
      const recivedNeighboursMineCellCount = getNeighboursMinesCount(
        board,
        0,
        0
      );
      const expectedNeighboursMineCellCount = getNeighboursMinesCount(
        board,
        0,
        0
      );

      expect(recivedNeighboursMineCellCount).toBe(
        expectedNeighboursMineCellCount
      );
    });
  });
});
