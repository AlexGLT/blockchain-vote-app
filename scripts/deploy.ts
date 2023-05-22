import {ethers} from 'hardhat';


export const stringToBytes = (name: string) => {
    return ethers.utils.formatBytes32String(name);
};

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);
	console.log('Account balance:', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('Ballot');
	const token = await Token.deploy([
		stringToBytes('goodness'),
		stringToBytes('justice'),
	]);
	
	console.log('Token address:', token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exitCode = 1;
	});
