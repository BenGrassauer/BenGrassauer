class Calculator {
  constructor(beforeTextElement, nowTextElement) {
    this.beforeTextElement = beforeTextElement;
    this.nowTextElement = nowTextElement;
    this.clear();
  }
  clear() {
    this.before = "";
    this.now = "0";
    this.operation = undefined;
  }
  delete() {
    this.now = this.now.toString().slice(0, -1);
    if (this.now.toString().length === 0) {
      this.now = "0";
    }
  }
  appendNumber(number) {
    if (number === "." && this.now.includes(".")) return;
    this.now = this.now.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.now === "") return;
    if (this.before !== "") {
      this.compute();
    }
    this.operation = operation;
    this.before = this.now;
    this.now = "0";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.before);
    const current = parseFloat(this.now);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.now = computation;
    this.operation = undefined;
    this.before = "";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDigits;
    }
  }
  updateDisplay() {
    this.nowTextElement.innerText = this.getDisplayNumber(this.now);
    if (this.operation != null) {
      this.beforeTextElement.innerText = `${this.getDisplayNumber(
        this.before
      )} ${this.operation}`;
    } else {
      this.beforeTextElement.innerText = "";
    }
  }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const beforeTextElement = document.querySelector("[data-before]");
const nowTextElement = document.querySelector("[data-now]");

const calculator = new Calculator(beforeTextElement, nowTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButtons.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
