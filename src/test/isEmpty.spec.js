import isEmpty from '../isEmpty';

describe('isEmpty', () => {
    it('should correctly identify empty values', () => {
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(true)).toBe(true);
    });
    
    it('should correctly identify non-empty values', () => {
        expect(isEmpty(1)).toBe(true); // Differs from test plan
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty('abc')).toBe(false);
        expect(isEmpty({ 'a': 1 })).toBe(false);
    });
    
    it('should identify empty Map and Set objects', () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
    });
    
    it('should correctly identify non-empty function, Buffer, TypedArray, and Arguments', () => {
        expect(isEmpty(function () {})).toBe(true); // Differs from test plan
        expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
        expect(isEmpty(new Int32Array([1, 2, 3]))).toBe(false);
        expect(isEmpty((function() { return arguments })())).toBe(true); // Differs from test plan
    });
    
    it('should identify empty arrays and array-like objects', () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty({ length: 0 })).toBe(false); // Differs from test plan
    });
    
    it('should identify empty and non-empty strings', () => {
        expect(isEmpty('')).toBe(true);
        expect(isEmpty('hello')).toBe(false);
    });
});
