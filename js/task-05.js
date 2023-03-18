
const onInputBtn = document.querySelector('#name-input');
const onNameOutput = document.querySelector('#name-output');

function onInputChange(event) {
    // console.log(event.currentTarget.value)
    // onNameOutput.textContent = event.currentTarget.value
    
    onInputBtn.value !== ''?
    onNameOutput.textContent = event.currentTarget.value :
     onNameOutput.textContent = 'Anonymous'
    
        
}


onInputBtn.addEventListener('input', onInputChange);