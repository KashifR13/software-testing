import add from "../add.js";

describe('add', () => {
    it('should add two numbers correctly', () => {
        expect(add(1, 1)).toBe(2);
        expect(add(1.1, 1.1)).toBe(2.2);
        expect(add(-1.1, 1.1)).toBe(0);
        expect(add(-1.1, -1.1)).toBe(-2.2);
        expect(add(NaN, NaN)).toBeNaN();
        expect(add(Infinity, 1)).toBe(Infinity);
        expect(add(-Infinity, 1)).toBe(-Infinity);
    });
    
    it('should handle invalid inputs', () => {
        expect(add(null, NaN)).toBeNaN();
        expect(add(undefined, undefined)).toBe(0); // If both undefined return default value (0)
        expect(add(1, null)).toBe(1);
        expect(add(NaN, undefined)).toBeNaN();
        expect(add({}, NaN)).toBeNaN();
    });
});
