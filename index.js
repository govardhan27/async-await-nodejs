//Users/govardhann/Documents/aync/uploads

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const axios = require('axios');
const { call, error } = require('./utils/promise');

// const path = `Users/govardhann/Documents/aync/uploads/${Math.random()}.txt`;
const path = `./uploads/file-${Math.random()}.txt`;
const url = `https://ironhack-pokeapi.herokuapp.com/pokemon/2`;


async function main(content) {
	const writeResult = await call(writeFile(path, content))
	if (writeResult && writeResult.error) {
		return error(writeResult, 'Error while writing the file')
	}
	return path;
}

async function pokemon() {
	const list = await call(axios.get(url));
	if (list && list.data) {
		const content = JSON.stringify(list.data);
		main(content)
			.then(r => {
				if (r.error) {
					return console.log('An error occured recover here ', r)
				}
				return console.log('Done without errors ', r);
			})
			.catch(err => console.log('An error occured ', err));
	}
}

pokemon();