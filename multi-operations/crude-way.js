const fs = require('fs-extra');


//Read multiple files
async function main() {
	const files = ['../readFiles/file-0.7034356517923201.txt', '../readFiles/file-0.034663503201336265.txt', '../readFiles/file-copy.txt'];
	for (const file of files) {
		const content = await fs.readFile(file, 'utf-8');
		console.log(content);
	}
}

main()
	.then(console.log)
	.catch(err => console.log('An error occured ',err));