import { createCell } from "./cell";

describe("Given function CreateCell()", () => {
  describe("When it is called", () => {
    test("Then should return a Cell with 'neighboursCount' property value is 0", () => {
      const cellNeighboursCount = 0;

      const cell = createCell();

      expect(cell.neighboursCount).toBe(cellNeighboursCount);
    });
  });
});
