const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = Function("return " + display.value)();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
