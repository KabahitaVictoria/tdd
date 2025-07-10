import assert from 'assert';
import taxCalculator from '../taxCalculator.js';

describe('Tax Calculator Tests', () => {
    it('taxCalculator(11999) should return 0 tax', () => {
        assert.equal(taxCalculator(11999), 0)
    })

    it('taxCalculator(12000) should return 0 tax', () => {
        assert.equal(taxCalculator(12000), 0)
    })

    it('taxCalculator(13000) should return 200', () => {
        assert.equal(taxCalculator(13000), 200)
    })

    it('taxCalculator(40000) should return 6400', () => {
        assert.equal(taxCalculator(40000), 6400)
    })
})