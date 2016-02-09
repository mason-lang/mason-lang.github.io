import Node from 'esast/lib/Node'
import Declaration from 'esast/lib/Declaration'
import Expression, {MemberExpression, MemberExpressionPlain, MemberExpressionComputed
	} from 'esast/lib/Expression'
import Identifier from 'esast/lib/Identifier'
import {LiteralString} from 'esast/lib/Literal'
import Loc from 'esast/lib/Loc'
import Statement, {ExpressionStatement} from 'esast/lib/Statement'
import mangleIdentifier, {propertyNameOk} from './mangle-identifier'

/** Mangles name and makes an [[Identifier]]. */
export function identifier(name: string): Identifier {
	return new Identifier(mangleIdentifier(name))
}

/** Assigns `loc` to `ast` and returns it. */
export function loc<A extends Node>(ast: A, loc: Loc): A {
	ast.loc = loc
	return ast
}

/**
Creates a member expression for `propertyName` in `object`,
using dot syntax (`a.b`) if possible, and falling back to `a['b']`.
*/
export function member(object: Expression, propertyName: string): MemberExpression {
	return propertyNameOk(propertyName) ?
		new MemberExpressionPlain(object, new Identifier(propertyName)) :
		new MemberExpressionComputed(object, new LiteralString(propertyName))
}

/** An Identifier if propertyName is a valid JavaScript property name, otherwise a LiteralString. */
export function propertyIdOrLiteral(propertyName: string): Identifier | LiteralString {
	return propertyNameOk(propertyName) ?
		new Identifier(propertyName) :
		new LiteralString(propertyName)
}

/**
Convert a node into one that can be used as the content of a line.
(esast requires all expression lines to be wrapped with [[ExpressionStatement]].)
*/
export function toLineContent(ast: Statement | Declaration | Expression): Statement {
	return ast instanceof Statement || ast instanceof Declaration ?
		ast :
		new ExpressionStatement(ast)
}
