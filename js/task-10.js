function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector("[type = 'number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

let inputNumber = 0;

function getAmount() {
  createBoxes(inputEl.value);
}

function createBoxes(amount) {
  const boxesColumn = [];
  const firstSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let newBox = document.createElement("div");
    newBox.style.width = `${firstSize + i * 10}px`;
    newBox.style.height = `${firstSize + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesColumn.push(newBox);
  }

  boxEl.prepend(...boxesColumn);
}

function destroyBoxes() {
  boxEl.innerHTML = "";
}
