const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

const { calculate, evaluate } = require('../calculator');

test('calculate performs addition', () => {
  assert.equal(calculate(2, '+', 3), 5);
});

test('calculate performs subtraction', () => {
  assert.equal(calculate(10, '-', 4), 6);
});

test('calculate performs multiplication', () => {
  assert.equal(calculate(45, '*', 2), 90);
});

test('calculate performs division', () => {
  assert.equal(calculate(20, '/', 5), 4);
});

test('calculate rejects division by zero', () => {
  assert.throws(() => calculate(20, '/', 0), /Division by zero/);
});

test('calculate rejects unsupported operators', () => {
  assert.throws(() => calculate(2, '^', 3), /Unsupported operator/);
});

test('evaluate handles the examples shown in the basic operations image', () => {
  assert.equal(evaluate('2 + 3'), 5);
  assert.equal(evaluate('10 - 4'), 6);
  assert.equal(evaluate('45 * 2'), 90);
  assert.equal(evaluate('20 / 5'), 4);
});

test('evaluate supports whitespace, decimal, negative, and exponent values', () => {
  assert.equal(evaluate(' 1.5 + 2.5 '), 4);
  assert.equal(evaluate('-8 / 2'), -4);
  assert.equal(evaluate('1e2 - 25'), 75);
});

test('evaluate rejects division by zero', () => {
  assert.throws(() => evaluate('1 / 0'), /Division by zero/);
});

test('evaluate rejects malformed expressions', () => {
  assert.throws(() => evaluate(''), /Enter an expression/);
  assert.throws(() => evaluate('2 ** 3'), /Enter an expression/);
  assert.throws(() => evaluate('1 + 2 + 3'), /Enter an expression/);
});

test('evaluate rejects results outside the supported numeric range', () => {
  assert.throws(() => evaluate('1e308 * 1e308'), /outside the supported numeric range/);
});

test('CLI prints results and handles clearing, errors, and quitting', () => {
  const calculatorPath = path.join(__dirname, '..', 'calculator.js');
  const result = spawnSync(
    process.execPath,
    [calculatorPath],
    { encoding: 'utf8', input: '2 + 3\nC\n1 / 0\nq\n' },
  );

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /> 5/);
  assert.match(result.stdout, /Cleared\./);
  assert.match(result.stderr, /Division by zero/);
});
