const { subtractAsync, sumAsync } = require('../math');

test('sumAsync adds numbers asynchronously', async () => {
	expect(await sumAsync(3, 7)).toBe(10);
});

test('subtractAsync subtracts numbers a	synchronously', async () => {
	expect(await subtractAsync(7, 3)).toBe(4);
});


// Run:
// npx jest --verbose
