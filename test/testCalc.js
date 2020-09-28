const assert = require('chai').assert;
const { sum } = require('../calc');

describe('Calc', () => {
  it('should add two numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
  });
});
