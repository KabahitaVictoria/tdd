// Samia Nalugo and Victoria Kabahita

export default function factorial(n){
    if (Number.isInteger(n) === false) throw new Error("Input must be an integer");
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1);
}