import assert from 'assert';
import multiply from './multiply.js';
import factorial from './factorial.js';

// Test cases for the multiply function
it('multiply(1,1) equals 1', () => {
  assert.equal(multiply(1, 1), 1);
})

it('multiply(2,2) equals 4', () => {
  assert.equal(multiply(2, 2), 4);
})

it('multiply(3,3) equals 9', () => {
  assert.equal(multiply(3, 3), 9);
})

it('multiply(4,4) equals 16', () => {
  assert.equal(multiply(4, 4), 16);
})

it('multiply(23, 45) equals 23 * 45', () => {
  assert.equal(multiply(23, 45), 23 * 45);
})

// Test cases for the factorial function
it('factorial(0) equals 1', () => {
  assert.equal(factorial(0), 1);
})

it('factorial(1) equals 1', () => {
  assert.equal(factorial(1), 1);
})

it('factorial(2) equals 2', () => {
  assert.equal(factorial(2), 2);
})

it('factorial(5) equals 120', () => {
  assert.equal(factorial(5), 120);
})

