import { describe, expect, test } from "@jest/globals";
import { createCell } from "../cell/cell";
import { Cell } from "../cell/types";

describe("Given function CreateCell()", () => {
  describe("When it recives nothing", () => {
    test("Then should return a Cell object", () => {
      const cell: Cell = { hasMine: true, neighboursCount: 0 };
      const expectedResult = createCell();

      expect(expectedResult).toStrictEqual(cell);
    });
  });
});
