const span = str => {
	const s = document.createElement('span')
	s.textContent = str
	return s
}

export default msCode =>
	new Promise(resolve => {
		const required = [
			'mason/meta/compile/compile',
			'mason/meta/compile/browser-only/compileErrorToDomSpan',
			'mason/meta/compile/CompileError'
		]
		require(required, (compile, _1, _2) => {
			const compileErrorToDomSpan = _1.default
			const CompileError = _2.default

			// TODO: use warnings
			const { result } = compile(msCode, {
				// TODO: Button for checks: false
				includeAmdefine: false,
				includeSourceMap: false,
				includeModuleDisplayName: false,
				forceNonLazyModule: true
			})

			const success = !(result instanceof Error)
			resolve(success ?
				{ success, result } :
				{
					success,
					result: result instanceof CompileError ?
						compileErrorToDomSpan(result) :
						span(result.stack)
				})
		})
	})
