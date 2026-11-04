const input = document.querySelector('.name-input');
const output = document.querySelector('.name-output');

const greetingName = (event) => {
    if (event.target.value.trim() === '') {
        output.textContent = 'Anonymous';
    } else {
output.textContent = event.target.value.trim();
    }
}

input.addEventListener("input", greetingName);

