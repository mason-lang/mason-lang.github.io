import
	codemirror.lib.codemirror
	mason-compile.info keywords

codemirror.defineMode 'mason \
	| Declares styles for various Mason tokens.
	| Styles defined in codemirror.css, prefixed with "cm-".
	startState. \
		state. PlainState
	token. \stream state
		stream.eatWhile `\s`
		{new-state style} = next-token state.state stream
		state.state := new-state
		style
	lineComment. "|\s"

next-token = poly \state stream
	abstract

|| styles available:
|| atom bracket comment def error keyword link number property string tag variable variable-2
styles =
	amp. 'variable-3
	brace. 'keyword
	comment. 'comment
	focus-call. 'variable-2
	function. 'def
	invalid. 'error
	keyword. 'keyword
	local. null || 'variable-3
	member. 'comment
	number. 'number
	plain. null || 'variable-3
	ms-region. 'comment
	regexp. 'string
	string. 'string
	type. 'atom

Indented-String-State = class
	construct .indent
		pass

	(next-token) \stream
		case
			<=? .indent stream.indentation()
				stream.skipToEnd()
				new-state. this
				style. styles.string
			else
				next-token PlainState stream

todo SYNTAX singleton
PlainState = {}
self-impl! next-token PlainState .\stream
	case
		stream.match `"$`
			new-state. new Indented-String-State stream.indentation()
			style. styles.string
		else
			new-state. this
			style. case stream
				_.match `\|?\| `
					_.skipToEnd()
					styles.comment
				_.match `region`
					_.skipToEnd()
					styles.ms-region
				_.match `".*"`
					styles.string
				_.match `\`.*\`g?i?m?y?`
					styles.regexp
				_.match `'\S+`
					styles.string
				_.eat `[\(\)\[\]\{\}]`
					styles.brace
				_.match `-?\d+(\.\d+)?`
					styles.number
				_.match `:\S+`
					styles.type
				_.match `\.?(\*|\$)?\!?\\.*`
					styles.function
				_.eat "~"
					styles.lazy
				_.match `\S+_`
					styles.focus-call
				_.match rgx-id
					cond stream.current().trim():keywords-set styles.keyword styles.local
				_.eat "."
					styles.member
				_.eat "&"
					styles.amp
				else
					stream.next()
					styles.plain

todo get from mason-compile info
non-id-characters = `\s.:()\[\]\{\}"&`
rgx-id = `[^#non-id-characters]+`
keywords-set = new Id-Set keywords
