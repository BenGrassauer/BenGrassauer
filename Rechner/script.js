class Calculator {
  constructor(beforeTextElement, nowTextElement) {
    this.beforeTextElement = beforeTextElement;
    this.nowTextElement = nowTextElement;
    this.clear();
  }
  clear() {
    this.before = " ";
    this.now = " ";
    this.operation = undefined;
  }
  delete() {
    this.now = this.now.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.now.includes(".")) return;
    this.now = this.now.toString() + number.toString();
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDigits = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
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

const calculator = new Calculator(beforeTextElement, nowTextElement);

numberButtons.forEach((button) => {
  button.addEventlistener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach((button) => {
  button.addEventlistener("click", () => {
    calculator.chosseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventlistener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventlistener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventlistener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
