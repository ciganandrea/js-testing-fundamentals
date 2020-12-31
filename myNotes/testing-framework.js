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

function test(title, callback) {
	try {
		callback();
		console.log(`✅ ${title}`);
	} catch (error) {
		console.error(`❌ ${title}`);
		console.error(error);
	}
}

test('sum adds numbers', () => {
	expect(sum(3, 7)).toBe(10);
});

test('subtract subtracts numbers', () => {
	expect(subtract(7, 3)).toBe(4);
});
