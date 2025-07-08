import assert from 'assert';
import fibonacci from '../fibonacci.js';

it('fibonacci(0) should return 0', () => {
    assert.equal(fibonacci(0), 0);
});

it('fibonacci(1) should return 1', () => {
    assert.equal(fibonacci(1), 1);
});

