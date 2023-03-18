const inputTextBtn = document.querySelector("#validation-input");

function colorChange(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    inputTextBtn.classList.add("valid");
    inputTextBtn.classList.remove("invalid");
  } else {
    inputTextBtn.classList.remove("valid");
    inputTextBtn.classList.add("invalid");
  }
}

inputTextBtn.addEventListener("blur", colorChange);
