import isObject from '../isObject';

describe('isObject', () => {
    it('should correctly identify objects as objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(true);
        expect(isObject(Function)).toBe(true);
        expect(isObject(new Number(0))).toBe(true);
        expect(isObject(new String(''))).toBe(true);
    });
    
    it('should correctly identify non-objects as non-objects', () => {
        expect(isObject(1)).toBe(false);
        expect(isObject(2.2)).toBe(false);
        expect(isObject("3.3")).toBe(false);
        expect(isObject(-Infinity)).toBe(false);
        expect(isObject(Infinity)).toBe(false);
        expect(isObject(NaN)).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(Symbol())).toBe(false);
        expect(isObject(Symbol(1))).toBe(false);
    });
    
    it('should handle empty objects and objects with values', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({a: 1})).toBe(true);
        expect(isObject(Object(null))).toBe(true);
        expect(isObject(Object(undefined))).toBe(true);
        expect(isObject([])).toBe(true);
        expect(isObject(Array(3))).toBe(true);
    });
});
