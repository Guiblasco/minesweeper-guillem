import { createCell } from "../cell/cell";

describe("Given function CreateCell()", () => {
  describe("When it recives one call with nothing arguments", () => {
    test("Then should return a Cell object with 'neighboursCount' property value is 0", () => {
      const neighboursCountCell = 0;

      const cell = createCell();

      expect(cell.neighboursCount).toBe(neighboursCountCell);
    });
  });
});
