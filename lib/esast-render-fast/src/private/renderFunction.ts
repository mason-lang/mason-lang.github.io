import {FunctionDeclaration, FunctionExpression} from 'esast/lib/Function'
import {nonNull} from 'op/Op'
import {o} from './context'
import renderBlockStatement from './renderBlockStatement'
import renderIdentifier from './renderIdentifier'
import renderPattern from './renderPattern'
import {paren} from './renderUtil'

export function renderFunctionNoLoc(_: FunctionDeclaration | FunctionExpression): void {
	const {id, params, body, async, generator} = _
	if (async)
		o('async ')
	o('function')
	if (generator)
		o('*')
	if (nonNull(id)) {
		o(' ')
		renderIdentifier(id)
	}
	paren(params, renderPattern)
	renderBlockStatement(body)
}
