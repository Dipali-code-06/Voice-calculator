const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch (err) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
