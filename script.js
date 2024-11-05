let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;

  // Add a small animation when display updates
  display.style.transform = 'scale(1.1)';
  setTimeout(() => {
    display.style.transform = 'scale(1)';
  }, 100);
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (!isNaN(displayValue[displayValue.length - 1])) {
    displayValue += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1) || '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue.replace("÷", "/").replace("×", "*")).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}
