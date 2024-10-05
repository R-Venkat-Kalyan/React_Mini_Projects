let currentOperation = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    const resultField = document.getElementById('result');
    if (currentOperation === '') {
        firstNumber += number;
        resultField.value = firstNumber;
    } else {
        secondNumber += number;
        resultField.value = secondNumber;
    }
}

function setOperation(operation) {
    if (firstNumber === '') return; // Don't set operation if no first number
    currentOperation = operation;
}

function calculate() {
    const resultField = document.getElementById('result');
    let result = 0;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) return; // Invalid numbers, do nothing

    if (currentOperation === '+') {
        result = num1 + num2;
    } else if (currentOperation === '-') {
        result = num1 - num2;
    } else if (currentOperation === '*') {
        result = num1 * num2;
    } else if (currentOperation === '/') {
        result = num1 / num2;
    }

    resultField.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    currentOperation = '';
}

function clearResult() {
    firstNumber = '';
    secondNumber = '';
    currentOperation = '';
    document.getElementById('result').value = '0'; // Reset the display
}
