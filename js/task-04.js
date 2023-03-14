let counterValue = 0;

const onBtnIncrement = document.querySelector('[data-action = "increment"]');
const onBtnDecrement = document.querySelector('[data-action = "decrement"]');
const valueData = document.querySelector("#value");

const onIncrement = () => {
  counterValue += 1;

  valueData.textContent = counterValue;
};

const onDecrement = () => {
  counterValue -= 1;

  valueData.textContent = counterValue;
};

onBtnIncrement.addEventListener("click", onIncrement);
onBtnDecrement.addEventListener("click", onDecrement);
