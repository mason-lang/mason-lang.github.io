import {FunctionExpression} from 'esast/lib/Function'
import Identifier from 'esast/lib/Identifier'
import ObjectExpression, {ComputedName, Property, PropertyGet, PropertyMethod, PropertyName,
	PropertyPlain, PropertySet} from 'esast/lib/ObjectExpression'
import {o, setAst} from './context'
import renderBlockStatement from './renderBlockStatement'
import renderExpression from './renderExpression'
import renderIdentifier from './renderIdentifier'
import renderLiteral from './renderLiteral'
import renderPattern from './renderPattern'
import {block, paren} from './renderUtil'
import {badType, isEmpty} from './util'

export function renderObjectExpressionNoLoc(_: ObjectExpression): void {
	const {properties} = _
	if (isEmpty(properties))
		o('{}')
	else
		block(properties, ',', renderProperty)
}

function renderProperty(_: Property): void {
	setAst(_)

	if (_ instanceof PropertyPlain) {
		outputPropertyName(_.name)
		o(':')
		renderExpression(_.value)

	} else if (_ instanceof PropertyMethod) {
		const {value} = _
		if (value.async)
			o('async ')
		if (value.generator)
			o('*')
		outputPropertyFunction(_, value)

	} else if (_ instanceof PropertyGet) {
		o('get ')
		outputPropertyFunction(_, _.value)

	} else if (_ instanceof PropertySet) {
		o('set ')
		outputPropertyFunction(_, _.value)

	} else
		throw badType(_)
}

export function outputPropertyName(_: PropertyName): void {
	if (_ instanceof ComputedName) {
		o('[')
		renderExpression(_.value)
		o(']')
	} else if (_ instanceof Identifier)
		renderIdentifier(_)
	else
		renderLiteral(_)
}

function outputPropertyFunction({name}: Property, value: FunctionExpression): void {
	outputPropertyName(name)
	paren(value.params, renderPattern)
	renderBlockStatement(value.body)
}
