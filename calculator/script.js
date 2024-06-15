const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        handleInput(value);
    });
});

function handleInput(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === 'C') {
        resetCalculator();
    } else if (value === '=') {
        if (operator && firstOperand !== null) {
            const secondOperand = parseFloat(currentInput);
            const result = calculate(firstOperand, secondOperand, operator);
            updateDisplay(result);
            currentInput = '';
            firstOperand = result;
            operator = null;
        }
    } else {
        if (currentInput) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = '';
        }
    }
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 0;
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

function resetCalculator() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay('0');
}