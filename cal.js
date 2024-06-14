let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '' && operator !== '.') return;
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            displayValue = '';
            updateDisplay();
        }, 1000);
    }
}
