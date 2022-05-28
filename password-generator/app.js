/*table of contents
    1.1 - global dom variables
    1.2 - global variables
    2.1 - create array for checked characters
    2.2 - create password
    3.1 - slider functionality
    3.2 - copy password
    4.1 - range slider progress
*/

//1.1 - global dom variables
const sliderInput = document.getElementById("slider-input");
const slider = document.getElementById("slider");

const generateBtn = document.getElementById("generate");
const passwordInput = document.getElementById("generated-password");

const lowerCaseBtn = document.getElementById("lowercase");
const upperCaseBtn = document.getElementById("uppercase");
const numbersBtn = document.getElementById("numbers");
const symbolsBtn = document.getElementById("symbols");

//1.2 - global variables
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()";

//2.1 - create array for checked characters
let characterArr = [];
function isChecked() {
    characterArr = [];
    if(numbersBtn.checked) {
        characterArr.push(numbers);
    }

    if(lowerCaseBtn.checked) {
        characterArr.push(lowerCase);
    }

    if(upperCaseBtn.checked) {
        characterArr.push(upperCase);
    }

    if(symbolsBtn.checked) {
        characterArr.push(symbols);
    }
}
//2.2 create password
function randPass(length) {
    let password = "";
    isChecked();
    let characters = characterArr.join("");
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
    passwordInput.innerHTML = `
    <input type="text" id="password" value="${password}">
    <button id="copy" onclick="copyToClipboard()">copy</button>
    `
}

generateBtn.addEventListener("click", function() {
    randPass(passLength);
})

//3.1 - slider functionality
let passLength = 0;

slider.oninput = function myFunction() {
    sliderInput.value = this.value;
    passLength = this.value;
}

sliderInput.addEventListener("change", function() {
    slider.value = this.value; 
    passLength = this.value;
})

//3.2 - copy password
function copyToClipboard() {
    const copyBtn = document.getElementById("password");
    copyBtn.select();
    copyBtn.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyBtn.value);
}


//4.1 - range slider progress
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }