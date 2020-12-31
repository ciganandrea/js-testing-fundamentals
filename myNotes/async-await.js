const { subtractAsync, sumAsync } = require('../math');

test('sumAsync adds numbers asynchronously', async () => {
	expect(await sumAsync(3, 7)).toBe(10);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
	expect(await subtractAsync(7, 3)).toBe(4);
});

// From this file’s location, run:
// node --require ./globals.js async-await.js
// or, for hot reloading
// nodemon --require ./globals.js async-await.js
