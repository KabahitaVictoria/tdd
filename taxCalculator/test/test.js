// VICTORIA KABAHITA (PERSONAL PRACTICE)
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

    // test for edge case i.e 36000
    it('taxCalculator(36000) should return 4800', () => {
        assert.equal(taxCalculator(36000), 4800)
    })

    // test for invalid inputs
    it('taxCalculator("abc") should throw an error', () => {
        assert.throws(() => taxCalculator("abc"), Error);
    })

    it('taxCalculator(-100) should throw an error', () => {
        assert.throws(() => taxCalculator(-100), Error);
    })
})