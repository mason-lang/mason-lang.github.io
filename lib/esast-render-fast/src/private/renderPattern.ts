import Identifier from 'esast/lib/Identifier'
import Pattern, {ArrayPattern, AssignmentProperty, ObjectPattern, RestElement
	} from 'esast/lib/Pattern'
import {o, setAst} from './context'
import {renderArrayPatternNoLoc} from './renderArray'
import renderIdentifier, {renderIdentifierNoLoc} from './renderIdentifier'
import {interleave} from './renderUtil'

export default function renderPattern(_: Pattern): void {
	setAst(_)

	if (_ instanceof Identifier)
		renderIdentifierNoLoc(_)

	else if (_ instanceof ObjectPattern) {
		o('{')
		interleave(_.properties, renderAssignmentProperty, ',')
		o('}')

	} else if (_ instanceof ArrayPattern)
		renderArrayPatternNoLoc(_)

	else if (_ instanceof RestElement) {
		o('...')
		renderPattern(_.argument)
	}
}

export function renderAssignmentProperty(_: AssignmentProperty): void {
	setAst(_)
	const {key, value, shorthand} = _

	renderIdentifier(key)
	if (!shorthand) {
		o(':')
		renderPattern(value)
	}
}
