// Samia Nalugo and Victoria Kabahita
import assert from 'assert';
import factorial from '../factorial.js';

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

it('factorial(-1) throws an error', () => {
  assert.throws(() => factorial(-1), Error);
})

it('factorial(3.5) throws an error', () => {
  assert.throws(() => factorial(3.5), Error);
})