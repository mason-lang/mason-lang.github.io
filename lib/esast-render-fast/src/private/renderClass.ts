import {ClassBody, ClassDeclaration, ClassExpression, MethodDefinition, MethodDefinitionConstructor,
	MethodDefinitionGet, MethodDefinitionNonConstructor, MethodDefinitionSet, Super
	} from 'esast/lib/Class'
import {nonNull} from 'op/Op'
import {o, setAst} from './context'
import renderBlockStatement from './renderBlockStatement'
import renderExpression from './renderExpression'
import renderIdentifier from './renderIdentifier'
import {outputPropertyName} from './renderObjectExpression'
import renderPattern from './renderPattern'
import {block, paren} from './renderUtil'
import {badType} from './util'

export function renderClassNoLoc(_: ClassDeclaration | ClassExpression): void {
	const {id, superClass, body} = _
	o('class ')
	if (nonNull(id))
		renderIdentifier(id)
	if (nonNull(superClass)) {
		o(' extends ')
		renderExpression(superClass)
	}
	renderClassBody(body)
}

export function renderClassBody(_: ClassBody): void {
	setAst(_)
	block(_.body, null, renderMethodDefinition)
}

export function renderMethodDefinition(_: MethodDefinition): void {
	setAst(_)

	if (_ instanceof MethodDefinitionConstructor) {
		const {value} = _
		o('constructor')
		paren(value.params, renderPattern)
		renderBlockStatement(value.body)

	} else if (_ instanceof MethodDefinitionNonConstructor) {
		const {name, value, static: isStatic} = _

		if (isStatic)
			o('static ')

		// todo: these should be abstract getters
		if ((<any> value).async)
			o('async ')
		if ((<any> value).generator)
			o('*')

		if (_ instanceof MethodDefinitionGet)
			o('get ')
		else if (_ instanceof MethodDefinitionSet)
			o('set ')

		outputPropertyName(name)

		paren(value.params, renderPattern)
		renderBlockStatement(value.body)

	} else
		throw badType(_)
}

export function renderSuper(_: Super): void {
	setAst(_)
	o('super')
}
