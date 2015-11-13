import
	mason-compile.Compiler
	..U.dom new-elem

compiler = new Compiler
	includeSourceMap. false

compile-or-span. |ms-code:Str
	todo [result. warnings.] = ...
	_ = compiler.compile ms-code "web-sample.ms"
	res = _.result
	success?. not res:Error
	result. cond success? res.code (format res.errorMessage 'error)

todo use
|| format-warning-for-html = |warning:Warning
||	format warning 'warning

format = |errorMessage className
	todo use dom helpers
	new-elem 'span (className. className)
		. new-elem 'span (className. 'loc textContent. errorMessage.loc)
		. new-elem 'message (className. 'message)
			new Stream |
				errorMessage.messageParts |code
					new-elem 'span (className. 'code textContent. code)
