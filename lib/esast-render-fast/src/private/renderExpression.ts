import {ClassExpression, Super} from 'esast/lib/Class'
import Expression, {ArrayExpression, AssignmentExpression, BinaryExpression,
	CallExpression, ConditionalExpression, LogicalExpression, MemberExpression,
	MemberExpressionComputed, MemberExpressionPlain, MetaProperty, NewExpression,
	SequenceExpression, SpreadElement, ThisExpression, UnaryExpression, UpdateExpression,
	YieldDelegateExpression, YieldExpression, YieldLike} from 'esast/lib/Expression'
import {ArrowFunctionExpression, FunctionExpression} from 'esast/lib/Function'
import Identifier from 'esast/lib/Identifier'
import Literal, {LiteralNumber} from 'esast/lib/Literal'
import TemplateLiteral, {TaggedTemplateExpression} from 'esast/lib/TemplateLiteral'
import ObjectExpression from 'esast/lib/ObjectExpression'
import Pattern from 'esast/lib/Pattern'
import {BlockStatement} from 'esast/lib/Statement'
import {nonNull} from 'op/Op'
import {o, setAst} from './context'
import {renderArrayExpressionNoLoc} from './renderArray'
import renderBlockStatement from './renderBlockStatement'
import {renderClassNoLoc, renderSuper} from './renderClass'
import {renderFunctionNoLoc} from './renderFunction'
import renderIdentifier, {renderIdentifierNoLoc} from './renderIdentifier'
import {renderLiteralNoLoc} from './renderLiteral'
import {renderObjectExpressionNoLoc} from './renderObjectExpression'
import renderPattern from './renderPattern'
import {renderTemplateLiteralNoLoc, renderTaggedTemplateExpressionNoLoc
	} from './renderTemplateLiteral'
import {interleave, paren} from './renderUtil'
import {badType} from './util'

export default function renderExpression(_: Expression): void {
	setAst(_)

	if (_ instanceof ArrayExpression)
		renderArrayExpressionNoLoc(_)

	else if (_ instanceof ArrowFunctionExpression) {
		const {params, body} = _
		const param0 = params[0]
		if (params.length === 1 && param0 instanceof Identifier)
			renderIdentifier(param0)
		else
			paren(params, renderPattern)
		o('=>')
		renderBlockOrExpression(body)

	} else if (_ instanceof AssignmentExpression) {
		const {left, operator, right} = _
		renderPatternOrMemberExpression(left)
		o(operator)
		renderExpression(right)

	} else if (_ instanceof BinaryExpression) {
		const {left, operator, right} = _
		o('(')
		renderExpression(left)
		o(operator === 'instanceof' ? ' instanceof ' : operator)
		renderExpression(right)
		o(')')

	} else if (_ instanceof CallExpression) {
		const {callee, arguments: args} = _
		if (callee instanceof ArrowFunctionExpression) {
			o('(')
			renderExpression(callee)
			o(')')
		} else
			renderExpressionOrSuper(callee)
		paren(args, renderExpressionOrSpread)

	} else if (_ instanceof ClassExpression)
		renderClassNoLoc(_)

	else if (_ instanceof ConditionalExpression) {
		const {test, consequent, alternate} = _
		o('(')
		renderExpression(test)
		o('?')
		renderExpression(consequent)
		o(':')
		renderExpression(alternate)
		o(')')

	} else if (_ instanceof FunctionExpression)
		renderFunctionNoLoc(_)

	else if (_ instanceof Identifier)
		renderIdentifierNoLoc(_)

	else if (_ instanceof Literal)
		renderLiteralNoLoc(_)

	else if (_ instanceof LogicalExpression) {
		const {left, operator, right} = _
		o('(')
		renderExpression(left)
		o(operator)
		renderExpression(right)
		o(')')

	} else if (_ instanceof MemberExpression)
		renderMemberExpressionNoLoc(_)

	else if (_ instanceof MetaProperty) {
		const {meta, property} = _
		renderIdentifier(meta)
		o('.')
		renderIdentifier(property)

	} else if (_ instanceof NewExpression) {
		const {callee, arguments: args} = _
		o('new (')
		renderExpression(callee)
		o(')')
		paren(args, renderExpressionOrSpread)

	} else if (_ instanceof ObjectExpression)
		renderObjectExpressionNoLoc(_)

	else if (_ instanceof SequenceExpression)
		interleave(_.expressions, renderExpression, ',')

	else if (_ instanceof TaggedTemplateExpression)
		renderTaggedTemplateExpressionNoLoc(_)

	else if (_ instanceof TemplateLiteral)
		renderTemplateLiteralNoLoc(_)

	else if (_ instanceof ThisExpression)
		o('this')

	else if (_ instanceof UnaryExpression) {
		const {operator, argument} = _
		o(operator)
		o(' ')
		renderExpression(argument)

	} else if (_ instanceof UpdateExpression) {
		const {prefix, operator, argument} = _
		if (prefix) {
			o(operator)
			renderExpression(argument)
		} else {
			renderExpression(argument)
			o(operator)
		}

	} else if (_ instanceof YieldLike)
		renderYieldLikeNoLoc(_)

	else
		throw badType(_)
}

function renderBlockOrExpression(_: BlockStatement | Expression): void {
	if (_ instanceof BlockStatement)
		renderBlockStatement(_)
	else
		renderExpression(_)
}

function renderPatternOrMemberExpression(_: Pattern | MemberExpression): void {
	if (_ instanceof MemberExpression)
		renderMemberExpression(_)
	else
		renderPattern(_)
}

export function renderExpressionOrSpread(_: Expression | SpreadElement): void {
	if (_ instanceof Expression)
		renderExpression(_)
	else
		renderSpreadElement(_)
}

export function renderSpreadElement(_: SpreadElement): void {
	setAst(_)
	o('...')
	renderExpression(_.argument)
}

function renderExpressionOrSuper(_: Expression | Super): void {
	if (_ instanceof Expression)
		renderExpression(_)
	else
		renderSuper(_)
}

function renderMemberExpression(_: MemberExpression): void {
	setAst(_)
	renderMemberExpressionNoLoc(_)
}

function renderMemberExpressionNoLoc(_: MemberExpression): void {
	if (_ instanceof MemberExpressionPlain) {
		const {object, property} = _
		renderExpressionOrSuper(object)
		if (object instanceof LiteralNumber && object.value === (object.value | 0))
			o('..')
		else
			o('.')
		renderIdentifier(property)
	} else if (_ instanceof MemberExpressionComputed) {
		const {object, property} = _
		renderExpressionOrSuper(object)
		o('[')
		renderExpression(property)
		o(']')
	} else
		throw badType(_)
}

function renderYieldLikeNoLoc(_: YieldLike): void {
	if (_ instanceof YieldExpression) {
		const {argument} = _
		if (nonNull(argument)) {
			o('(yield ')
			renderExpression(argument)
			o(')')
		} else
			o('(yield)')

	} else if (_ instanceof YieldDelegateExpression) {
		o('(yield* ')
		renderExpression(_.argument)
		o(')')

	} else
		throw badType(_)
}
