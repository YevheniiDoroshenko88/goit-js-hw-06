const input = document.querySelector('#validation-input')
console.log(input);

input.addEventListener('blur', checkInput);

function checkInput (event) {
    const currentInput = event.target;
    let lengthInput = currentInput.value.length;
    const dataLength = Number(currentInput.dataset.length);
    if (lengthInput === dataLength) {
        currentInput.classList.add("valid")
        currentInput.classList.remove("invalid")
    } else {
        currentInput.classList.add("invalid")
        currentInput.classList.remove("valid")
    }
    
}