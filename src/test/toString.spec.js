import toString from '../toString';

describe('toString', () => {
    it('should correctly convert numbers to strings', () => {
        expect(toString(1)).toBe('1');
        expect(toString(2.2)).toBe('2.2');
    });
    
    it('should handle special number values correctly', () => {
        expect(toString(-Infinity)).toBe('-Infinity');
        expect(toString(Infinity)).toBe('Infinity');
        expect(toString(NaN)).toBe('NaN');
    });
    
    it('should handle non-number types correctly', () => {
        expect(toString(true)).toBe('true');
        expect(toString(null)).toBe('null');
        expect(toString(undefined)).toBe('undefined');
    });
    
    it('should handle objects and arrays correctly', () => {
        expect(toString({})).toBe('[object Object]');
        expect(toString(Object(1))).toBe('1');
        expect(toString([1, 2, 3])).toBe('1,2,3');
        expect(toString(Array(3))).toBe(',,');
    });
    
    it('should handle strings and symbols correctly', () => {
        expect(toString('3.3')).toBe('3.3');
        expect(toString(Symbol())).toBe('Symbol()');
        expect(toString(Symbol(1))).toBe('Symbol(1)');
    });
    
    it('should handle zero and negative zero correctly', () => {
        expect(toString(0)).toBe('0');
        expect(toString(-0)).toBe('-0');
    });
});
