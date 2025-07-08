export default function fibonacci(n) {
    if (Number.isInteger(n) === false) throw new Error("Input must be an integer");
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}  // fibonacci(3): fibonacci(2) + fibonacci(1) -> 1 + 1 = 2