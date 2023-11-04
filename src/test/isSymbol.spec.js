import isSymbol from '../isSymbol';

describe('isSymbol', () => {
    it('should correctly identify symbols as symbols', () => {
        expect(isSymbol(Symbol.iterator)).toBe(true);
        expect(isSymbol(Symbol(1))).toBe(true);
    });
    
    it('should correctly identify non-symbols as non-symbols', () => {
        expect(isSymbol(1)).toBe(false);
        expect(isSymbol(2.2)).toBe(false);
        expect(isSymbol("3.3")).toBe(false);
        expect(isSymbol(-Infinity)).toBe(false);
        expect(isSymbol(Infinity)).toBe(false);
        expect(isSymbol(NaN)).toBe(false);
        expect(isSymbol(true)).toBe(false);
        expect(isSymbol(null)).toBe(false);
        expect(isSymbol(undefined)).toBe(false);
        expect(isSymbol({})).toBe(false);
        expect(isSymbol(Array(3))).toBe(false);
    });
    
    it('should handle symbol objects correctly', () => {
        expect(isSymbol(Object(Symbol(null)))).toBe(true);
        expect(isSymbol(Object(Symbol(undefined)))).toBe(true);
    });
});
