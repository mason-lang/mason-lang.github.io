import Literal, {LiteralBoolean, LiteralNull, LiteralNumber, LiteralRegExp, LiteralString
	} from 'esast/lib/Literal'
import {o, setAst} from './context'
import {badType} from './util'

export default function renderLiteral(_: Literal): void {
	setAst(_)
	renderLiteralNoLoc(_)
}

export function renderLiteralNoLoc(_: Literal): void {
	if (_ instanceof LiteralBoolean || _ instanceof LiteralNumber || _ instanceof LiteralRegExp)
		o(_.value.toString())

	else if (_ instanceof LiteralNull)
		o('null')

	else if (_ instanceof LiteralString)
		renderLiteralStringNoLoc(_)

	else
		throw badType(_)
}

export function renderLiteralString(_: LiteralString): void {
	setAst(_)
	renderLiteralStringNoLoc(_)
}

function renderLiteralStringNoLoc({value}: LiteralString): void {
	const escaped = value.replace(/[\\"\n\t\b\f\v\r\u2028\u2029]/g, ch => literalEscapes.get(ch))
	o(`"${escaped}"`)
}

const literalEscapes: Map<string, string> = new Map([
	['\\', '\\\\'],
	['"', '\\"'],
	['\n', '\\n'],
	['\t', '\\t'],
	['\b', '\\b'],
	['\f', '\\f'],
	['\v', '\\v'],
	['\r', '\\r'],
	['\u2028', '\\u2028'],
	['\u2029', '\\u2029']])
