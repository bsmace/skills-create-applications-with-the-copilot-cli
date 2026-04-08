#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
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
    console.log('');
    console.log('Supported Operations:');
    console.log('  add        - Addition (+)');
    console.log('  subtract   - Subtraction (-)');
    console.log('  multiply   - Multiplication (×)');
    console.log('  divide     - Division (÷)');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 add 5');
    console.log('  node calculator.js 20 subtract 8');
    console.log('  node calculator.js 4 multiply 7');
    console.log('  node calculator.js 100 divide 4');
    process.exit(0);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = parseFloat(args[2]);

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

      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Valid operations: add, subtract, multiply, divide');
        process.exit(1);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
