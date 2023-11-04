import capitalize from '../capitalize';

describe('capitalize', () => {
    it('should capitalize the first character of a valid string', () => {
        expect(capitalize('heLLo woRLd')).toBe('Hello world');
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('TESTING')).toBe('Testing');
    });
    
    it('should return an empty string for an empty input', () => {
        expect(capitalize('')).toBe('');
    });
    
    it('should handle non-string inputs', () => {
        expect(capitalize(1)).toEqual('1');
        expect(capitalize(0)).toEqual('0');
        expect(capitalize(-Infinity)).toEqual('-infinity');
        expect(capitalize(Infinity)).toEqual('Infinity');
        expect(capitalize(NaN)).toEqual('Nan');
        expect(capitalize(1.1)).toEqual('1.1');
        expect(capitalize(true)).toEqual('True');
        expect(capitalize(false)).toEqual('False');
        expect(capitalize(undefined)).toEqual('Undefined');
        expect(capitalize(null)).toEqual('Null');
        expect(capitalize({})).toEqual('[object object]');
        expect(capitalize(Object(1))).toEqual('1');
        expect(capitalize(Symbol())).toEqual('Symbol()');
        expect(capitalize(Symbol(1))).toEqual('Symbol(1)');
        expect(capitalize([])).toEqual('');
        expect(capitalize(['1', '2'])).toEqual('1,2');
    });
});
