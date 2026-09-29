const readline = require('node:readline');

const NUMBER = '[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';
const EXPRESSION = new RegExp(`^\\s*(${NUMBER})\\s*([+*/-])\\s*(${NUMBER})\\s*$`, 'i');

function calculate(left, operator, right) {
  switch (operator) {
    case '+': // Addition
      return left + right;
    case '-': // Subtraction
      return left - right;
    case '*': // Multiplication
      return left * right;
    case '/': // Division
      if (right === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return left / right;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

function evaluate(expression) {
  const match = EXPRESSION.exec(expression);
  if (!match) {
    throw new Error('Enter an expression such as 12 + 3, or C to clear.');
  }

  const result = calculate(Number(match[1]), match[2], Number(match[3]));
  if (!Number.isFinite(result)) {
    throw new Error('The result is outside the supported numeric range.');
  }
  return result;
}

async function run() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  });

  console.log('Basic calculator (+, -, *, /). Enter C to clear or Q to quit.');
  terminal.prompt();

  for await (const line of terminal) {
    const input = line.trim();

    if (/^(q|quit|exit)$/i.test(input)) {
      break;
    }

    if (/^c$/i.test(input)) {
      console.log('Cleared.');
    } else if (input) {
      try {
        console.log(evaluate(input));
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }

    terminal.prompt();
  }

  terminal.close();
}

if (require.main === module) {
  run().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { calculate, evaluate };
