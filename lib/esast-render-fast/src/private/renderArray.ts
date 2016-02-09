import {ArrayExpression} from 'esast/lib/Expression'
import {ArrayPattern} from 'esast/lib/Pattern'
import Op, {nonNull} from 'op/Op'
import {o} from './context'
import {renderExpressionOrSpread} from './renderExpression'
import renderPattern from './renderPattern'
import {interleave} from './renderUtil'

export function renderArrayExpressionNoLoc({elements}: ArrayExpression): void {
	renderParts(elements, renderExpressionOrSpread)
}

export function renderArrayPatternNoLoc({elements}: ArrayPattern): void {
	renderParts(elements, renderPattern)
}

function renderParts<A>(elements: Array<Op<A>>, render: (_: A) => void): void {
	function maybeRender(_: Op<A>): void {
		if (nonNull(_))
			render(_)
	}
	o('[')
	interleave(elements, maybeRender, ',')
	o(']')
}
