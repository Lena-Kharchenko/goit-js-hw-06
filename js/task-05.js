
const onInputBtn = document.querySelector('#name-input');
const onNameOutput = document.querySelector('#name-output');

function onInputChange(event) {
    console.log(event.currentTarget.value)

    onNameOutput.textContent = event.currentTarget.value
}


onInputBtn.addEventListener('input', onInputChange);