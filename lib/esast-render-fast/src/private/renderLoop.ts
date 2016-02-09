import Loop, {BreakStatement, ContinueStatement, DoWhileStatement, ForStatement, ForInOfStatement,
	ForOfStatement, LabeledStatement, WhileStatement} from 'esast/lib/Loop'
import {BlockStatement} from 'esast/lib/Statement'
import {nonNull} from 'op/Op'
import {o} from './context'
import {renderVariableDeclarationOrExpression, renderVariableDeclarationOrIdentifier
	} from './renderDeclaration'
import renderExpression from './renderExpression'
import renderIdentifier from './renderIdentifier'
import renderStatement from './renderStatement'
import {badType} from './util'

export function renderLoopNoLoc(_: Loop): void {
	if (_ instanceof WhileStatement) {
		const {test, body} = _
		o('while(')
		renderExpression(test)
		o(')')
		renderStatement(body)

	} else if (_ instanceof DoWhileStatement) {
		const {body, test} = _
		o('do ')
		renderStatement(body)
		if (!(body instanceof BlockStatement))
			o(';')
		o(' while(')
		renderExpression(test)
		o(')')

	} else if (_ instanceof ForStatement) {
		const {init, test, update, body} = _
		o('for(')
		if (nonNull(init))
			renderVariableDeclarationOrExpression(init)
		o(';')
		if (nonNull(test))
			renderExpression(test)
		o(';')
		if (nonNull(update))
			renderExpression(update)
		o(')')
		renderStatement(body)

	} else if (_ instanceof ForInOfStatement) {
		o('for(')
		renderVariableDeclarationOrIdentifier(_.left)
		o(_ instanceof ForOfStatement ? ' of ' : ' in ')
		renderExpression(_.right)
		o(')')
		renderStatement(_.body)

	} else
		throw badType(_)
}

export function renderBreakStatementNoLoc({label}: BreakStatement): void {
	o('break')
	if (nonNull(label)) {
		o(' ')
		renderIdentifier(label)
	}
}

export function renderContinueStatementNoLoc({label}: ContinueStatement): void {
	o('continue')
	if (nonNull(label)) {
		o(' ')
		renderIdentifier(label)
	}
}

export function renderLabeledStatementNoLoc({label, body}: LabeledStatement): void {
	renderIdentifier(label)
	o(':')
	renderStatement(body)
}
