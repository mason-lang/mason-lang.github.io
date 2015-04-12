import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import './codemirror-mason-mode'

const commonOpts = {
	autoClearEmptyLines: true,
	indentWithTabs: true,
	lineNumbers: true,
	lineWrapping: true,
	// Entire CodeMirror is rendered. We expect small scripts.
	viewportMargin: Infinity
}

const special = (specialOpts) => (domElement, opts) =>
	CodeMirror(domElement, Object.assign({}, commonOpts, specialOpts, opts))

export const msCodeMirror = special({ mode: 'mason', theme: 'monokai' })

export const jsCodeMirror = special({
	mode: 'javascript',
	readOnly: true,
	theme: 'base16-light'
})
