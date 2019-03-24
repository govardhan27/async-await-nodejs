const fs = require('fs-extra');
const { call, error } = require('./utils/promise');

/*
  Read operation using fs-extra
*/

async function main() {
	const fileContent = call(fs.readFile('./readFiles/file.txt', 'utf-8'));
	if (fileContent && fileContent.error) {
		return error(fileContent, ' Error while reading the file');
	}
	return fileContent;
}

main()
	.then(r => {
		if (r.error) {
			return console.log('An error occurred, recover here. Details:', r)
		}
		return console.log('Done ', r);
	})
	.catch(err => console.log('An error Occured!!', err));