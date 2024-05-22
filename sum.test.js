const sum = require('./sum');

// Kiểm thử đúng (positive tests)
test('adds 1 + 2 to equal 5', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 - 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

// Kiểm thử sai (negative tests)
test('throws error when parameters are not numbers', () => {
  expect(() => sum(1, '2')).toThrow('Parameters must be numbers');
  expect(() => sum('1', 2)).toThrow('Parameters must be numbers');
  expect(() => sum(null, 2)).toThrow('Parameters must be numbers');
});
