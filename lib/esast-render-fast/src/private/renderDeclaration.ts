import {ClassDeclaration} from 'esast/lib/Class'
import Declaration, {VariableDeclaration, VariableDeclarationConst, VariableDeclarationLet,
	VariableDeclarationVar, VariableDeclarator} from 'esast/lib/Declaration'
import Expression from 'esast/lib/Expression'
import {FunctionDeclaration} from 'esast/lib/Function'
import Identifier from 'esast/lib/Identifier'
import {nonNull} from 'op/Op'
import {o, setAst} from './context'
import {renderClassNoLoc} from './renderClass'
import renderExpression from './renderExpression'
import {renderFunctionNoLoc} from './renderFunction'
import renderIdentifier from './renderIdentifier'
import renderPattern from './renderPattern'
import {interleave} from './renderUtil'
import {badType} from './util'

export default function renderDeclaration(_: Declaration): void {
	setAst(_)
	renderDeclarationNoLoc(_)
}

export function renderDeclarationNoLoc(_: Declaration): void {
	if (_ instanceof ClassDeclaration)
		renderClassNoLoc(_)
	else if (_ instanceof FunctionDeclaration)
		renderFunctionNoLoc(_)
	else if (_ instanceof VariableDeclaration)
		renderVariableDeclarationNoLoc(_)
	else
		throw badType(_)
}

export function renderVariableDeclaration(_: VariableDeclaration): void {
	setAst(_)
	renderVariableDeclarationNoLoc(_)
}

export function renderVariableDeclarationNoLoc(_: VariableDeclaration): void {
	const {declarations} = _
	if (_ instanceof VariableDeclarationConst)
		o('const ')
	else if (_ instanceof VariableDeclarationLet)
		o('let ')
	else if (_ instanceof VariableDeclarationVar)
		o('var ')
	else
		throw badType(_)
	interleave(declarations, renderVariableDeclarator, ',')
}

export function renderVariableDeclarationOrIdentifier(_: VariableDeclaration | Identifier): void {
	if (_ instanceof VariableDeclaration)
		renderVariableDeclaration(_)
	else
		renderIdentifier(_)
}

export function renderVariableDeclarationOrExpression(_: VariableDeclaration | Expression): void {
	if (_ instanceof VariableDeclaration)
		renderVariableDeclaration(_)
	else
		renderExpression(_)
}

export function renderVariableDeclarator(_: VariableDeclarator): void {
	setAst(_)
	const {id, init} = _
	renderPattern(id)
	if (nonNull(init)) {
		o('=')
		renderExpression(init)
	}
}
