function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const backGroundEl = document.querySelector(".color");

function changeBackGroundColor() {
  const backGroundColor = getRandomHexColor();

  bodyColor.style.backgroundColor = `${backGroundColor}`;
  backGroundEl.textContent = `${backGroundColor}`;
}

changeColorBtn.addEventListener("click", changeBackGroundColor);
