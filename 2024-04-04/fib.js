class Fib {
  constructor() {
    this.fibs = [0, 1];
  }
  fib(n) {
    let wieoft = n - this.fibs.length + 1;
    for (let i = 0; i < wieoft; i++) {
      arr.push(arr.at(-1) + arr.at(-2));
    }
    return this.fibs.at(n);
  }
}
fibInstance = Fib();
console.log(fibInstance);
console.log(fibInstance.fib(5));
console.log(fibInstance.fib(3));
console.log(fibInstance.fib(12));
console.log(fibInstance.fib(8));
