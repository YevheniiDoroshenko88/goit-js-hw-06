const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const defaultFontSize = text.style.fontSize;

input.value = defaultFontSize;

input.addEventListener('input', changeFontSize);

function changeFontSize (event) {
    let fontSize = event.target.value;
    text.style.fontSize = `${fontSize}px`
}