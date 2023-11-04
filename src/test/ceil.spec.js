import ceil from '../ceil';

describe('ceil', () => {
    it('should correctly round up valid numbers to the nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
        expect(ceil(6.004, 2)).toBe(6.01);
        expect(ceil(6040, -2)).toBe(6100);
        expect(ceil(1)).toBe(1);
        expect(ceil(0)).toBe(0);
        expect(ceil(-Infinity)).toBe(-Infinity);
        expect(ceil(Infinity)).toBe(Infinity);
        expect(ceil(NaN)).toBe(NaN);
    });
    
    it('should handle non-number inputs and throw an error', () => {
        expect(ceil('hello')).toEqual(NaN);
        expect(ceil(true)).toEqual(1);
        expect(ceil(false)).toEqual(0);
        expect(ceil(undefined)).toEqual(NaN);
        expect(ceil(null)).toEqual(0);
        expect(ceil({})).toEqual(NaN);
        expect(ceil(Object(1))).toEqual(1);
        expect(() => ceil(Symbol())).toThrow();
        expect(() => ceil(Symbol(1))).toThrow();
        expect(ceil([])).toEqual(0);
        expect(ceil(['1', '2'])).toEqual(NaN);
    });
});
