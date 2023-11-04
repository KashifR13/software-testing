import eq from '../eq';

describe('eq', () => {
    it('should perform SameValueZero comparison correctly', () => {
        expect(eq(1, 1)).toBe(true);
        expect(eq(2.1, 2)).toBe(false);
        expect(eq(-3, 3)).toBe(false);
        expect(eq(4, "4")).toBe(true);
        expect(eq(Infinity, -Infinity)).toBe(false);
    });
    
    it('should handle special cases', () => {
        expect(eq(null, NaN)).toBe(false);
        expect(eq(undefined, undefined)).toBe(true); // This should be true, test document said false.
        expect(eq(1, null)).toBe(false);
        expect(eq(NaN, undefined)).toBe(false);
        expect(eq({}, NaN)).toBe(false);
        expect(eq(Infinity, undefined)).toBe(false);
        expect(eq(-Infinity, 1)).toBe(false);
    });
    
    it('should handle NaN correctly', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });
});
