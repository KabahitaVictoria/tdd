import assert from 'assert';
import taxCalculator from '../taxCalculator.js';

describe('Tax Calculator Tests', () => {
    it('taxCalculator(11999) should return 0 tax', () => {
        assert.equal(taxCalculator(11999), 0)
    })
})