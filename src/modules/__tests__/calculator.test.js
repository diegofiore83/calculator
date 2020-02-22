import {calculator} from '../calculator';

describe('calculator', () => {
    it('should return an addiction between 2 operands', () => {
        const params = {operand1: 1210, operator: '+', operand2: 7};
        const result = calculator(params);

        expect(result).toEqual(1217);
    });

    it('should return a subtraction between 2 operands', () => {
        const params = {operand1: 1210, operator: '-', operand2: 7};
        const result = calculator(params);

        expect(result).toEqual(1203);
    });

    it('should return a multiplication between 2 operands', () => {
        const params = {operand1: 5, operator: '*', operand2: 8};
        const result = calculator(params);

        expect(result).toEqual(40);
    });

    it('should return an addiction between 2 operands', () => {
        const params = {operand1: 10, operator: '/', operand2: 5};
        const result = calculator(params);

        expect(result).toEqual(2);
    });

    it('should return 0 for a not list operator', () => {
        const params = {operand1: 10, operator: '%', operand2: 5};
        const result = calculator(params);

        expect(result).toEqual(0);
    });
});