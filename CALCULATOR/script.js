let result = document.getElementById("result");

function insertChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  if (result.value.slice(-1) === operator) {
    return;
  }
  result.value += operator;
  const operation = result.value.split(operator);
  if (operation.length > 1) {
    result.value = eval(operation[0] + operator + operation[1]);
  }
}

