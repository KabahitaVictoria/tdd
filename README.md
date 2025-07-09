# TDD Practice Assignments – Multiply, Factorial & Fibonacci

This repository contains implementations and tests of mathematical functions using **Test-Driven Development (TDD)** principles in JavaScript. 
It was built as part of a TDD learning module with both **test-first** and **test-last** approaches.


---

## 🧪 Assignments Overview

### 1. ✅ **Multiply Function**  
**Approach:** Test-First  
**Location:** `multiply/`  
- Built using the Red-Green-Refactor cycle.
- Includes tests for basic positive/negative numbers and zero.
- Additional edge case tests for type safety and large values.

### 2. 🧮 **Factorial Function**  
**Approach:** Test-Last  
**Location:** `factorial/`  
- Function was implemented first, followed by test cases.
- Tests include:
  - Factorials of positive integers
  - Handling of negative numbers
  - Handling of non-integer inputs

### 3. 🔁 **Fibonacci Function (with Timing)**  
**Approach:** Test-First  
**Location:** `fibonacci/`  
- Includes two versions of Fibonacci:
  - Iterative (loop-based)
  - Recursive
- Uses `performance.now()` to benchmark the runtime of both approaches.
- Focused on comparing performance and validating correctness.

---

## 🧰 Tools & Dependencies

- **Node.js**
- **Mocha & Chai** – For testing
- **ESLint** – For code style and linting

---

## 🔧 Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/KabahitaVictoria/tdd.git
   cd tdd

2. Install dependencies:
   ```bash
   npm install

3. Run all tests:
   ```bash
   npm test

4. Run tests by folder e.g multiply:
   ```bash
   cd multiply && npx mocha

