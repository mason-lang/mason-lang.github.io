import Declaration from 'esast/lib/Declaration'
import Loop, {BreakStatement, ContinueStatement, LabeledStatement} from 'esast/lib/Loop'
import Statement, {BlockStatement, CatchClause, DebuggerStatement, EmptyStatement,
	ExpressionStatement, IfStatement, ReturnStatement, SwitchCase, SwitchStatement, ThrowStatement,
	TryStatement} from 'esast/lib/Statement'
import {nonNull} from 'op/Op'
import {indent, nl, o, setAst, unindent} from './context'
import renderBlockStatement, {renderBlockStatementNoLoc} from './renderBlockStatement'
import {renderDeclarationNoLoc} from './renderDeclaration'
import renderExpression from './renderExpression'
import renderPattern from './renderPattern'
import {renderBreakStatementNoLoc, renderContinueStatementNoLoc, renderLabeledStatementNoLoc,
	renderLoopNoLoc} from './renderLoop'
import {block, lines} from './renderUtil'

export default function renderStatement(_: Statement): void {
	setAst(_)

	if (_ instanceof BlockStatement)
		renderBlockStatementNoLoc(_)

	else if (_ instanceof BreakStatement)
		renderBreakStatementNoLoc(_)

	else if (_ instanceof ContinueStatement)
		renderContinueStatementNoLoc(_)

	else if (_ instanceof DebuggerStatement)
		o('debugger')

	else if (_ instanceof EmptyStatement) {

	} else if (_ instanceof ExpressionStatement)
		renderExpression(_.expression)

	else if (_ instanceof IfStatement) {
		const {test, consequent, alternate} = _
		o('if(')
		renderExpression(test)
		o(')')
		renderStatement(consequent)
		if (nonNull(alternate)) {
			if (!(consequent instanceof BlockStatement))
				o(';')
			o(' else ')
			renderStatement(alternate)
		}

	} else if (_ instanceof LabeledStatement)
		renderLabeledStatementNoLoc(_)

	else if (_ instanceof Loop)
		renderLoopNoLoc(_)

	else if (_ instanceof ReturnStatement) {
		const {argument} = _
		if (nonNull(argument)) {
			o('return ')
			renderExpression(argument)
		} else
			o('return')

	} else if (_ instanceof SwitchStatement) {
		const {discriminant, cases} = _
		o('switch(')
		renderExpression(discriminant)
		o(')')
		block(cases, null, renderSwitchCase)

	} else if (_ instanceof ThrowStatement) {
		o('throw ')
		renderExpression(_.argument)

	} else if (_ instanceof TryStatement) {
		const {block, handler, finalizer} = _
		o('try ')
		renderBlockStatement(block)
		if (nonNull(handler))
			renderCatchClause(handler)
		if (nonNull(finalizer)) {
			o('finally')
			renderBlockStatement(finalizer)
		}

	} else
		renderDeclarationNoLoc(<Declaration> _)
}

export function renderSwitchCase(_: SwitchCase): void {
	setAst(_)
	const {test, consequent} = _

	if (nonNull(test)) {
		o('case ')
		renderExpression(test)
	} else
		o('default')
	o(':')
	switch (consequent.length) {
		case 0:
			break
		case 1:
			renderStatement(consequent[0])
			break
		default:
			indent()
			nl()
			lines(consequent, ';', renderStatement)
			unindent()
	}
}

export function renderCatchClause(_: CatchClause): void {
	setAst(_)
	const {param, body} = _
	o('catch(')
	renderPattern(param)
	o(')')
	renderBlockStatement(body)
}
