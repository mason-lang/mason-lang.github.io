export default (require, js) => {
	const fun = Function('define', js)
	return new Promise((resolve, reject) => {
		const def = (required, doDefine) => {
			const e = required.shift()
			if (e !== 'exports')
				throw new Error('Not a Mason module!')
			require(required, function() {
				// TODO:ES6 Splats
				const modules = Array.prototype.slice.call(arguments)
				try {
					const exports = { }
					modules.unshift(exports)
					doDefine(...modules)
					const keys = Object.keys(exports)
					if (keys.length === 1 && keys[0] === 'default')
						resolve(exports.default)
					else
						resolve(exports)
				} catch (err) {
					reject(err)
				}
			}, reject)
		}
		return fun(def)
	})
}
