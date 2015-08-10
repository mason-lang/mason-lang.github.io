use!
	codemirror.mode.javascript.javascript
	.codemirror-mason-mode
use
	codemirror.lib.codemirror
	msl.math.Number infinity
	msl.Object object-merge

common-opts =
	autoClearEmptyLines. true
	indentWithTabs. true
	lineNumbers. true
	lineWrapping. true
	# Entire CodeMirror is rendered.
	viewportMargin. infinity


special = |special-opts
	base-opts = object-merge common-opts special-opts
	|dom-element opts
		all-opts = object-merge base-opts opts
		codemirror dom-element all-opts

ms-code-mirror. special
	mode. "mason"
	theme. "monokai"

js-code-mirror. special
	mode. "javascript"
	readOnly. "true"
	theme. "base16-light"
