const display = document.getElementById('display');

function appendCharacter(char) {
    display.textContent += char;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('^', '**'));
    } catch {
        display.textContent = 'Error';
    }
}
