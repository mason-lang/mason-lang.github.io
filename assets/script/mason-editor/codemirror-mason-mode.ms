use
	codemirror.lib.codemirror

codemirror.defineMode "mason" |
	# Declares styles for various Mason tokens.
	# Styles defined in codemirror.css, prefixed with "cm-".
	startState. |
		state. PlainState
	token. |stream state
		stream.eatWhile (new RegExp "\\s")
		new-state style = next-token state.state stream
		state.state := new-state
		style
	lineComment. "#"

next-token = new Method
	name.
	args. [ "state" "stream" ]

# atom bracket comment def error keyword link number property string tag variable variable-2
styles =
	# TODO: renames in order
	assign-local. "atom"
	brace. "keyword"
	comment. "comment"
	focus-call. "variable-2"
	function. "def"
	invalid. "error"
	keyword. "keyword"
	local. "variable-3"
	member. "comment"
	number. "number"
	plain. "variable-3"
	ms-region. "comment"
	string. "string"
	type. "atom"

Indented-String-State = class
	construct! current-indent
		.indent = current-indent

	next-token |stream
		case
			<=? .indent stream.indentation()
				stream.skipToEnd()
				new-state. this
				style. styles.string
			else
				next-token PlainState stream

# TODO: singleton
PlainState = new Object
self-impl! next-token PlainState .|stream
	case
		stream.match new RegExp "\"$"
			new-state. new Indented-String-State stream.indentation()
			style. styles.string
		else
			new-state. this
			style. case stream
				_.eat "#"
					_.skipToEnd()
					styles.comment
				_.match new RegExp "region"
					_.skipToEnd()
					styles.ms-region
				_.match new RegExp "\".*\""
					styles.string
				_.match new RegExp "\\S+\\.\\s"
					styles.assign-local
				_.eat new RegExp "[\\(\\)\\[\\]\\\{\\}]"
					styles.brace
				_.match new RegExp "-?\\d+(\\.\\d+)?"
					styles.number
				_.match new RegExp ":\\S+"
					styles.type
				_.match "~?\\|.*"
					styles.function
				_.eat "~"
					styles.lazy
				_.match new RegExp "\\S+_"
					styles.focus-call
				_.match new RegExp "[^\\s\\.\\(\\)\\[\\]\\\{\\}]+"
					# TODO:SYNTAX ternary
					case
						stream.current().trim():keywords
							styles.keyword
						else
							styles.local
				_.eat "."
					styles.member
				else
					stream.next()
					styles.plain

# TODO: Use mason-compile.Lang
keywords-string = "_|->|and|as|assert!|break|break!|built|case|case!|catch|catch!|class|construct!|continue!|debug|debugger|do!|else|except|except!|false|finally!|forbid!|@for|@for|for|for!|get|if|if!|in|is|new|not|null|or|out|pass|returning|set!|super|static|switch|switch!|this|this-module-directory|throw!|true|try|try!|undefined|unless|unless!|use|use!|use-debug|use~|<~|<~~"
keywords = => Set (keywords-string.split "|")
