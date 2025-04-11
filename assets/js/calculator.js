const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// 🎹 Keyboard input support
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // avoid form submission
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace' && !event.shiftKey) {
    deleteLast();
  } else if (key === '%') {
    appendValue('%');
  }
});
