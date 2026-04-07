const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';

function updateDisplay(valor){
    display.value = valor || '0';
}

function clearDisplay(){
    currentInput = '';
    updateDisplay();
}
    function addValue(value){
        if (display.value === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        updateDisplay(currentInput);
    }
function calculate(){
    try {
        const result = eval(currentInput);
        if  (result === undefined || isNaN (result)){
            updateDisplay('Error');
            currentInput = '';
            return;
        }
        currentInput = String(result);
        updateDisplay(result);
    } catch (error) {
        console.error(error);
        updateDisplay('Error');
        currentInput = '';
    }
}

function tratarClick(event) {
    const buttonValue = event.target.dataset.value;
    if (buttonValue === 'C') {
        clearDisplay();
    } else if (buttonValue === '=') {
        calculate();
    } else {
        currentInput += buttonValue;
        updateDisplay(currentInput);
    }
}
buttons.forEach(function (button) {
    button.addEventListener('click', tratarClick);
});