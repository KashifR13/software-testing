import toFinite from '../toFinite';

describe('toFinite', () => {
    it('should correctly convert valid numbers to finite numbers', () => {
        expect(toFinite(1)).toBe(1);
        expect(toFinite(2.2)).toBe(2.2);
        expect(toFinite('3.3')).toBe(3.3);
    });
    
    it('should handle Infinity and -Infinity correctly', () => {
        expect(toFinite(-Infinity)).toBe(Number.MAX_VALUE * -1);
        expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    });
    
    it('should handle invalid inputs and NaN', () => {
        expect(toFinite(NaN)).toBe(0);
        expect(toFinite(true)).toBe(1);
        expect(toFinite(null)).toBe(0);
        expect(toFinite(undefined)).toBe(0);
        expect(toFinite({})).toBe(0);
        expect(toFinite(Object(1))).toBe(1);
    });
    
    it('should handle symbols and empty objects correctly', () => {
        expect(toFinite(Symbol())).toBe(0);
        expect(toFinite(Symbol(1))).toBe(0);
        expect(toFinite(Symbol('123'))).toBe(0);
        expect(toFinite({})).toBe(0);
        expect(toFinite(Array(3))).toBe(0);
    });
    
    it('should handle zero correctly', () => {
        expect(toFinite(0)).toBe(0);
    });
});
