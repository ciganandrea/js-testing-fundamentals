const { subtract, sum } = require('../math');

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		},
	};
}

expect(sum(3, 7)).toBe(10);
