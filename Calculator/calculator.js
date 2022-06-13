const display = document.getElementById('display');

function displayValue(value) {
    display.textContent += value;
}

const leftPar = document.getElementById('left-par').addEventListener('click', function() {
    let value = '(';
    displayValue(value);
})

const rightPar = document.getElementById('right-par').addEventListener('click', function() {
    let value = ')';
    displayValue(value);
})

const equals = document.getElementById('equals').addEventListener('click', function() {
    let value = display.textContent;
    let answer = eval(value);
    display.textContent = answer;
})

const clear = document.getElementById('clear').addEventListener('click', function() {
    display.textContent = "";
})

const square = document.getElementById('square').addEventListener('click', function() {
    let value = display.textContent;
    let answer = eval(value * value);
    display.textContent = answer;
})

const squareRoot = document.getElementById('square-root').addEventListener('click', function() {
    let value = display.textContent;
    let answer = Math.sqrt(value);
    display.textContent = answer;
})

const backspace = document.getElementById('backspace').addEventListener('click', function() {
    let value = display.textContent;
    value = value.substring(0, value.length - 1);
    display.textContent = value;
})

const multiply = document.getElementById('multiply').addEventListener('click', function() {
    let value = '*';
    displayValue(value);
})

const divide = document.getElementById('divide').addEventListener('click', function() {
    let value = '/';
    displayValue(value);
})

const plus = document.getElementById('plus').addEventListener('click', function() {
    let value = '+';
    displayValue(value);
})

const minus = document.getElementById('minus').addEventListener('click', function() {
    let value = '-'
    displayValue(value);
})

const one = document.getElementById('one').addEventListener('click', function() {
    let value = 1;
    displayValue(value);
})

const two = document.getElementById('two').addEventListener('click', function() {
    let value = 2;
    displayValue(value);
})

const three = document.getElementById('three').addEventListener('click', function() {
    let value = 3;
    displayValue(value);
})

const four = document.getElementById('four').addEventListener('click', function() {
    let value = 4;
    displayValue(value);
})

const five = document.getElementById('five').addEventListener('click', function() {
    let value = 5;
    displayValue(value);
})

const six = document.getElementById('six').addEventListener('click', function() {
    let value = 6;
    displayValue(value);
})

const seven = document.getElementById('seven').addEventListener('click', function() {
    let value = 7;
    displayValue(value);
})

const eight = document.getElementById('eight').addEventListener('click', function() {
    let value = 8;
    displayValue(value);
})

const nine = document.getElementById('nine').addEventListener('click', function() {
    let value = 9;
    displayValue(value);
})

const zero = document.getElementById('zero').addEventListener('click', function() {
    let value = 0;
    displayValue(value);
})

const period = document.getElementById('period').addEventListener('click', function() {
    let value = '.';
    displayValue(value);
})