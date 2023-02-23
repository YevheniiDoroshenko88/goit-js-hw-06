const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', changeName)  

function changeName (event) {
	output.textContent = event.target.value || 'Anonymous'
}