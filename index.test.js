const { sum } = require('./index.js');

test('sum of array [1, 2, 3, 4, 5] should be 15', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});
