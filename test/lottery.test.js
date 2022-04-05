const Lottery = artifacts.require('Lottery');

// 순서대로 유저 목록이 들어옴
contract('Lottery', ([ deployer, usr1, usr2 ]) => {
	let lottery;
	beforeEach(async () => {
		console.log(`Before each`);

		lottery = await Lottery.new();
	});

	it('Basic test', async () => {
		console.log(`Basic test`);
		const owner = await lottery.owner();
		const value = await lottery.getSomeValue();
		console.log(`owner: ${owner}`);
		console.log(`value: ${value}`);
		assert.equal(value, 5);
	});

	it('getPot should return current pot', async () => {
		let pot = await lottery.getPot();
		assert.equal(pot, 0);
	});
});
