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
}
