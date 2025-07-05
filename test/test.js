import assert from 'assert';
import multiply from '../multiply.js';
 
it('multiply(1,1) equals 1', () => {
  assert.equal(multiply(1, 1), 1);
})

it('multiply(2,2) equals 4', () => {
  assert.equal(multiply(2, 2), 4);
})

it('multiply(3,3) equals 9', () => {
  assert.equal(multiply(3, 3), 9);
})