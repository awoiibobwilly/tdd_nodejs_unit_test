// Importing Mocha and Node.js assert
const assert = require('assert');
const multiply = require('../mathOperations');

describe('Multiplication Function', () => {
    it('This Function should return 1 for multiply(1, 1)', () => {
        assert.strictEqual(multiply(1, 1), 1);
    });
});
