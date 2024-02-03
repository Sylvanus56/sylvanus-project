let result = document.getElementById("result");

function appendDigit(digit) {
    result.value += digit;
}

function appendSymbol(symbol) {
    result.value += symbol;
}

function deleteDigit() {
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    result.value = "";
}

function evaluate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid input");
    }
}
