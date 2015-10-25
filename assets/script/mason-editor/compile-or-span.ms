import
	mason-compile.compile
	mason-compile.CompileError
	..U.dom new-elem

compile-or-span. |ms-code
	_ = compile ms-code
		includeSourceMap. false
		includeModuleName. false
		useBoot. false
	res = _.result
	success?. not res:Error
	result. case res
		success?
			_
		:CompileError
			error->span_
		else
			new-elem 'span _.stack

error->span = |error:CompileError
	format error.warning 'error

todo use
|| format-warning-for-html = |warning:Warning
||	format warning 'warning

format = |warning kind
	todo use dom helpers
	new-elem 'span (className. kind)
		. new-elem 'span (className. 'loc textContent. warning.loc)
		. new-elem 'message (className. 'message)
			new Stream |
				warning.messageParts |code
					new-elem 'span (className. 'code textContent. code)
