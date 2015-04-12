export default (require, js) => {
	const fun = Function('define', js)
	return new Promise((resolve, reject) => {
		// Boot Mason lazily, rendering is more important.
		require([ 'mason/private/boot-order' ], bo => {
			_ms.getModule(bo)
			const def = (required, doDefine) => {
				const e = required.shift()
				if (e !== 'exports')
					throw new Error('Not a Mason module!')
				// TODO:ES6 (...modules) =>
				require(required, function() {
					try {
						const modules = Array.prototype.slice.call(arguments)
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
	})
}
