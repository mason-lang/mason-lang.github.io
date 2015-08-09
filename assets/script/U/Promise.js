
export const $done = promise =>
	promise.catch(err => console.log(err.stack))
