const sizeChange = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

function onMouseMove() {
  textChange.style.fontSize = `${sizeChange.value}px`;
}

sizeChange.addEventListener("input", onMouseMove);
