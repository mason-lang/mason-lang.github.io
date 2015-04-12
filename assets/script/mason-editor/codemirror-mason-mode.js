import CodeMirror from 'codemirror/lib/codemirror'

CodeMirror.defineMode('mason', () => {
	// Declares styles for various Mason tokens.
	// Styles defined in codemirror.css, prefixed with 'cm-'.
	const startState = () => ({ state: PlainState })
	const token = (stream, state) => {
		stream.eatWhile(/\s/)
		const { newState, style } = state.state.token(stream)
		state.state = newState
		return style
	}
	return { startState, token, lineComment: '#' }
})

// atom bracket comment def error keyword link number property string tag variable variable-2
const style = {
	assignLocal: 'atom',
	assignObj: 'keyword',
	brace: 'keyword',
	comment: 'comment',
	focusCall: 'variable-2',
	fun: 'def',
	invalid: 'error',
	keyword: 'keyword',
	local: 'variable-3',
	member: 'comment',
	number: 'number',
	plain: 'variable-3',
	region: 'comment',
	string: 'string',
	type: 'atom'
}

class IndentedStringState {
	constructor(currentIndent) {
		this.indent = currentIndent
	}

	token(stream) {
		if (stream.indentation() > this.indent) {
			stream.skipToEnd()
			return { newState: this, style: style.string }
		}
		return PlainState.token(stream)
	}
}

const PlainState = {
	_getStyle(stream) {
		return stream.eat('#') ?
			(stream.skipToEnd(), style.comment) :
			stream.match(/region/) ?
			(stream.skipToEnd(), style.region) :
			stream.match(/".*"/) ?
			style.string :
			stream.match(/\S+\.\s/) ?
			style.assignLocal :
			stream.eat(/[\(\)\[\]\{\}]/) ?
			style.brace :
			stream.match(/-?\d+(\.\d+)?/) ?
			style.number :
			stream.match(/:\S+/) ?
			style.type :
			stream.match(/~?\|.*/) ?
			style.fun :
			stream.eat('~') ?
			style.lazy :
			stream.match(/\S+_/) ?
			style.focusCall :
			stream.match(/[^\s\.\(\)\[\]\{\}]+/) ?
			(keywords.has(stream.current().trim()) ? style.keyword : style.local) :
			stream.eat('.') ?
			style.member :
			(stream.next(), style.plain)
	},

	token(stream) {
		if (stream.match(/\"$/))
			return {
				newState: new IndentedStringState(stream.indentation()),
				style: style.string
			}
		return { newState: this, style: this._getStyle(stream) }
	}
}

// TODO: Use mason.meta.compile.Lang
const keywords = new Set([
	'debug',
	'debugger',
	'this',
	'use', 'use!', 'use~', 'use-debug',
	'->',
	'case', 'case!', 'else',
	'in', 'out', 'res',
	'_',
	'loop!', 'end-loop!',
	'=', '<~', '<~'
])
