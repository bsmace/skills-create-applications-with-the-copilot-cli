#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Basic Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Supported Advanced Operations:
 * - Modulo (%)
 * - Power/Exponentiation (^)
 * - Square Root (√)
 */

const Calculator = {
  /**
   * Addition: Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add: (a, b) => a + b,

  /**
   * Subtraction: Subtracts b from a
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract: (a, b) => a - b,

  /**
   * Multiplication: Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply: (a, b) => a * b,

  /**
   * Division: Divides a by b
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Quotient of a and b
   * @throws {Error} If divisor is zero
   */
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed');
    }
    return a / b;
  },

  /**
   * Modulo: Returns the remainder of a divided by b
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If divisor is zero
   */
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed for modulo operation');
    }
    return a % b;
  },

  /**
   * Power: Raises base to the exponent
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} base raised to the power of exponent
   */
  power: (base, exponent) => Math.pow(base, exponent),

  /**
   * Square Root: Returns the square root of n
   * @param {number} n - The number to get square root of
   * @returns {number} Square root of n
   * @throws {Error} If n is negative
   */
  squareRoot: (n) => {
    if (n < 0) {
      throw new Error('Error: Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }
};

/**
 * Parse command line arguments and perform calculation
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Node.js CLI Calculator');
    console.log('');
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('       calculator.js <number> sqrt');
    console.log('');
    console.log('Supported Operations:');
    console.log('  add        - Addition (+)');
    console.log('  subtract   - Subtraction (-)');
    console.log('  multiply   - Multiplication (×)');
    console.log('  divide     - Division (÷)');
    console.log('  modulo     - Modulo (%)');
    console.log('  power      - Exponentiation (^)');
    console.log('  sqrt       - Square Root (√)');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 add 5');
    console.log('  node calculator.js 20 subtract 8');
    console.log('  node calculator.js 4 multiply 7');
    console.log('  node calculator.js 100 divide 4');
    console.log('  node calculator.js 17 modulo 5');
    console.log('  node calculator.js 2 power 8');
    console.log('  node calculator.js 16 sqrt');
    process.exit(0);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = args[2] ? parseFloat(args[2]) : null;

  // Special handling for square root (only needs one number)
  if (operation === 'sqrt' || operation === '√') {
    if (isNaN(num1)) {
      console.error('Error: Operand must be a valid number');
      process.exit(1);
    }

    try {
      const result = Calculator.squareRoot(num1);
      console.log(`√${num1} = ${result}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
    return;
  }

  // For all other operations, require two numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  try {
    let result;

    switch (operation) {
      case 'add':
      case '+':
        result = Calculator.add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;

      case 'subtract':
      case '-':
        result = Calculator.subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;

      case 'multiply':
      case '*':
      case 'x':
      case 'X':
        result = Calculator.multiply(num1, num2);
        console.log(`${num1} × ${num2} = ${result}`);
        break;

      case 'divide':
      case '/':
        result = Calculator.divide(num1, num2);
        console.log(`${num1} ÷ ${num2} = ${result}`);
        break;

      case 'modulo':
      case '%':
        result = Calculator.modulo(num1, num2);
        console.log(`${num1} % ${num2} = ${result}`);
        break;

      case 'power':
      case '^':
        result = Calculator.power(num1, num2);
        console.log(`${num1} ^ ${num2} = ${result}`);
        break;

      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Valid operations: add, subtract, multiply, divide, modulo, power, sqrt');
        process.exit(1);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = Calculator;
