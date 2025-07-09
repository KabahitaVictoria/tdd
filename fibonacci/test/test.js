// Samia Nalugo and Victoria Kabahita

import assert from 'assert';
import fibonacci from '../fibonacci.js';
import { timeFibonacci, timeFibonacciLoop } from '../fibonacci.js';

it('fibonacci(0) should return 0', () => {
    assert.equal(fibonacci(0), 0);
});

it('fibonacci(1) should return 1', () => {
    assert.equal(fibonacci(1), 1);
});

it('fibonacci(2) should return 1', () => {
    assert.equal(fibonacci(2), 1);
});

it('fibonacci(3) should return 2', () => {
    assert.equal(fibonacci(3), 2);
})

it('fibonacci(5) should return 5', () => {
    assert.equal(fibonacci(5), 5)
})

it('fibonacci(-1) throws an error', () => {
  assert.throws(() => fibonacci(-1), Error);
})

it('fibonacci(4.5) throws an error', () => {
  assert.throws(() => fibonacci(4.5), Error);
})

// timing tests for fibonacci using loop and recursion
it('timing fibonacci(20) using recursion', () => {
    timeFibonacci(20);
});

it('timing fibonacci(20) using loop', () => {
    timeFibonacciLoop(20);
}
);