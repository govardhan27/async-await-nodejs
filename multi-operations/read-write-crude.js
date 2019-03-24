const fs = require('fs-extra');

async function main() {
	const files = ['../readFiles/file-0.7034356517923201.txt', '../readFiles/file-0.034663503201336265.txt', '../readFiles/file.txt'];
	const readWrites = [];

	for (const file of files) {
		readWrites.push((async () => {
			const content = await fs.readFile(file, 'utf-8');
			const path = file.replace('.txt', '-copy.txt');
			return await fs.writeFile(path, content);
		})());
	}
	return await Promise.all(readWrites);
}

main()
	.then(console.log)
	.catch(err => console.log('An error occured ', err))