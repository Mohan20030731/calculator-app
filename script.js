const display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
    setTimeout(() => {
      currentInput = "";
      updateDisplay();
    }, 1500);
  }
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
