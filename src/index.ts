const grid = document.querySelector(".main-container__grid-container__grid");
const width = 9;

if (grid === null) {
  throw Error;
}
for (let cellPosition = 0; cellPosition < width * width; cellPosition++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}
