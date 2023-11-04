import toInteger from '../toInteger';

describe('toInteger', () => {
    it('should correctly convert valid numbers to integers', () => {
        expect(toInteger(1)).toBe(1);
        expect(toInteger(2.2)).toBe(2);
        expect(toInteger('3.3')).toBe(3);
    });
    
    it('should handle Infinity and -Infinity correctly', () => {
        expect(toInteger(-Infinity)).toBe(Number.MAX_VALUE * -1);
        expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    });
    
    it('should handle invalid inputs and NaN', () => {
        expect(toInteger(NaN)).toBe(0);
        expect(toInteger(true)).toBe(1);
        expect(toInteger(null)).toBe(0);
        expect(toInteger(undefined)).toBe(0);
        expect(toInteger({})).toBe(0);
        expect(toInteger(Object(1))).toBe(1);
    });
    
    it('should handle symbols and empty objects correctly', () => {
        expect(toInteger(Symbol())).toBe(0);
        expect(toInteger(Symbol(1))).toBe(0);
        expect(toInteger({})).toBe(0);
        expect(toInteger(Array(3))).toBe(0);
    });
    
    it('should handle zero correctly', () => {
        expect(toInteger(0)).toBe(0);
    });
});
