const call = promise =>
	promise.then(r => r === null || undefined ? ({ result: r }) : r)
		.catch(error => ({ error }));

const error = (result, error) =>
	({ error: result.error, message: msg });

module.exports = { call, error }