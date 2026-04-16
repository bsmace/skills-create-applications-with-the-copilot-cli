/**
 * Calculator Test Suite
 * Tests for all calculator operations including basic and advanced math
 */

const Calculator = require('../calculator');

describe('Calculator - Basic Operations', () => {
  describe('Addition', () => {
    it('should add two positive numbers', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    it('should add positive and negative numbers', () => {
      expect(Calculator.add(10, -5)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(Calculator.add(-5, -3)).toBe(-8);
    });

    it('should add zero', () => {
      expect(Calculator.add(5, 0)).toBe(5);
    });

    it('should add decimal numbers', () => {
      expect(Calculator.add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(Calculator.subtract(10, 4)).toBe(6);
    });

    it('should subtract and get negative result', () => {
      expect(Calculator.subtract(5, 10)).toBe(-5);
    });

    it('should subtract negative numbers', () => {
      expect(Calculator.subtract(10, -5)).toBe(15);
    });

    it('should subtract zero', () => {
      expect(Calculator.subtract(5, 0)).toBe(5);
    });

    it('should subtract decimal numbers', () => {
      expect(Calculator.subtract(10.5, 5.5)).toBe(5);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two positive numbers', () => {
      expect(Calculator.multiply(4, 7)).toBe(28);
    });

    it('should multiply positive and negative numbers', () => {
      expect(Calculator.multiply(5, -3)).toBe(-15);
    });

    it('should multiply two negative numbers', () => {
      expect(Calculator.multiply(-4, -5)).toBe(20);
    });

    it('should multiply by zero', () => {
      expect(Calculator.multiply(5, 0)).toBe(0);
    });

    it('should multiply decimal numbers', () => {
      expect(Calculator.multiply(2.5, 4)).toBe(10);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers', () => {
      expect(Calculator.divide(100, 4)).toBe(25);
    });

    it('should divide with remainder', () => {
      expect(Calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('should divide resulting in negative', () => {
      expect(Calculator.divide(-20, 4)).toBe(-5);
    });

    it('should divide zero by a number', () => {
      expect(Calculator.divide(0, 5)).toBe(0);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => {
        Calculator.divide(10, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });

    it('should divide decimal numbers', () => {
      expect(Calculator.divide(7.5, 2.5)).toBe(3);
    });
  });
});

describe('Calculator - Advanced Operations', () => {
  describe('Modulo', () => {
    it('should calculate modulo (5 % 2 = 1)', () => {
      expect(Calculator.modulo(5, 2)).toBe(1);
    });

    it('should calculate modulo (17 % 5 = 2)', () => {
      expect(Calculator.modulo(17, 5)).toBe(2);
    });

    it('should calculate modulo (25 % 7 = 4)', () => {
      expect(Calculator.modulo(25, 7)).toBe(4);
    });

    it('should calculate modulo with negative numbers', () => {
      expect(Calculator.modulo(-10, 3)).toBe(-1);
    });

    it('should calculate modulo where dividend is smaller', () => {
      expect(Calculator.modulo(3, 5)).toBe(3);
    });

    it('should calculate modulo with exact division', () => {
      expect(Calculator.modulo(10, 5)).toBe(0);
    });

    it('should throw error when modulo divisor is zero', () => {
      expect(() => {
        Calculator.modulo(10, 0);
      }).toThrow('Error: Division by zero is not allowed for modulo operation');
    });
  });

  describe('Power', () => {
    it('should calculate power (2 ^ 3 = 8)', () => {
      expect(Calculator.power(2, 3)).toBe(8);
    });

    it('should calculate power (2 ^ 8 = 256)', () => {
      expect(Calculator.power(2, 8)).toBe(256);
    });

    it('should calculate power (3 ^ 4 = 81)', () => {
      expect(Calculator.power(3, 4)).toBe(81);
    });

    it('should calculate power (5 ^ 2 = 25)', () => {
      expect(Calculator.power(5, 2)).toBe(25);
    });

    it('should raise number to power zero', () => {
      expect(Calculator.power(5, 0)).toBe(1);
    });

    it('should raise number to negative power', () => {
      expect(Calculator.power(2, -2)).toBe(0.25);
    });

    it('should raise negative number to power', () => {
      expect(Calculator.power(-2, 3)).toBe(-8);
    });

    it('should raise negative number to even power', () => {
      expect(Calculator.power(-3, 2)).toBe(9);
    });

    it('should calculate power with decimal exponent', () => {
      expect(Calculator.power(4, 0.5)).toBe(2);
    });
  });

  describe('Square Root', () => {
    it('should calculate square root (√16 = 4)', () => {
      expect(Calculator.squareRoot(16)).toBe(4);
    });

    it('should calculate square root (√25 = 5)', () => {
      expect(Calculator.squareRoot(25)).toBe(5);
    });

    it('should calculate square root (√100 = 10)', () => {
      expect(Calculator.squareRoot(100)).toBe(10);
    });

    it('should calculate square root (√2.25 = 1.5)', () => {
      expect(Calculator.squareRoot(2.25)).toBe(1.5);
    });

    it('should calculate square root of zero', () => {
      expect(Calculator.squareRoot(0)).toBe(0);
    });

    it('should calculate square root of decimal numbers', () => {
      expect(Calculator.squareRoot(0.25)).toBe(0.5);
    });

    it('should throw error for negative numbers', () => {
      expect(() => {
        Calculator.squareRoot(-9);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    it('should throw error for any negative number', () => {
      expect(() => {
        Calculator.squareRoot(-1);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    it('should calculate square root of large numbers', () => {
      expect(Calculator.squareRoot(144)).toBe(12);
    });
  });
});

describe('Calculator - Integration', () => {
  it('should handle chained operations conceptually', () => {
    // (2 ^ 3) + 5 = 8 + 5 = 13
    const powerResult = Calculator.power(2, 3);
    const addResult = Calculator.add(powerResult, 5);
    expect(addResult).toBe(13);
  });

  it('should handle complex calculation: √(16) * 3 + 5 % 2', () => {
    // √16 = 4
    // 4 * 3 = 12
    // 5 % 2 = 1
    // 12 + 1 = 13
    const sqrtResult = Calculator.squareRoot(16);
    const multiplyResult = Calculator.multiply(sqrtResult, 3);
    const moduloResult = Calculator.modulo(5, 2);
    const finalResult = Calculator.add(multiplyResult, moduloResult);
    expect(finalResult).toBe(13);
  });

  it('should handle sequence of operations with different types', () => {
    // 10 / 2 = 5
    // 5 ^ 2 = 25
    // 25 % 7 = 4
    const step1 = Calculator.divide(10, 2);
    const step2 = Calculator.power(step1, 2);
    const step3 = Calculator.modulo(step2, 7);
    expect(step3).toBe(4);
  });
});
