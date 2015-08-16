use
	mason-compile.browser-only.compileErrorToDomSpan
	mason-compile.compile
	mason-compile.CompileError
	..U.dom new-elem

|ms-code
	_ = compile ms-code
		includeAmdefine. false
		includeSourceMap. false
		includeModuleName. false
		forceNonLazyModule. true
	res = _.result
	success?. not res:Error
	result. case res
		success?
			_
		:CompileError
			compileErrorToDomSpan_
		else
			new-elem "span" _.stack