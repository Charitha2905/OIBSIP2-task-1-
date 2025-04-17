let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); // Note: Using eval() for simplicity (not secure for production)
    } catch (error) {
        display.value = "Error";
    }
}