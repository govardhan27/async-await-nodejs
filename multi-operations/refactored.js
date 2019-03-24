const fs = require('fs-extra');

const files = ['../readFiles/file-0.7034356517923201.txt', '../readFiles/file-0.034663503201336265.txt', '../readFiles/file.txt'];
const output = 'output';

/*
  following prepare function performs:
  1.we remove the output folder if it already exists
  2.we create the output folder 
*/
async function prepare() {
	await fs.remove(output);
	return await fs.mkdir(output)
}

async function main() {
	await prepare();
	const readWrites = files.map(async file => {
		const content = await fs.readFile(file, 'utf-8');
		const path = file.replace('readFiles', output);
		return await fs.writeFile(path, content);
	});
	return await Promise.all(readWrites);
}

main()
	.then(console.log)
	.catch(err => console.log('An error occured ', err));