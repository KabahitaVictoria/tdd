// Samia Nalugo and Victoria Kabahita

export default function fibonacci(n) {
    if (Number.isInteger(n) === false) throw new Error("Input must be an integer");
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}  // fibonacci(3): fibonacci(2) + fibonacci(1) -> 1 + 1 = 2

// fibonacci (iterative) function
function fibonacciLoop(n) {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let a = 0, b = 1, next;
  
    for (let i = 2; i <= n; i++) {
      next = a + b;
      a = b;
      b = next;
    }
  
    return b;
  }
  
// timing functions for recursive and iterative fibonacci
export function timeFibonacci(n) {
    const start = performance.now();
    fibonacci(n);
    const end = performance.now();
    console.log(`Recursive Fibonacci of ${n} took ${end - start} milliseconds`);
}

export function timeFibonacciLoop(n) {
    const start = performance.now();
    fibonacciLoop(n);
    const end = performance.now();
    console.log(`Iterative Fibonacci of ${n} took ${end - start} milliseconds`);
}