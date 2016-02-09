import Node from 'esast/lib/Node'
import {ClassBody, MethodDefinition, Super} from 'esast/lib/Class'
import {VariableDeclarator} from 'esast/lib/Declaration'
import Expression, {SpreadElement} from 'esast/lib/Expression'
import {AssignmentProperty, isPattern} from 'esast/lib/Pattern'
import Program, {ExportSpecifier, ImportSpecifierAbstract, ModuleDeclaration
	} from 'esast/lib/Program'
import Statement, {SwitchCase} from 'esast/lib/Statement'
import {renderClassBody, renderMethodDefinition, renderSuper} from './renderClass'
import {renderVariableDeclarator} from './renderDeclaration'
import renderExpression, {renderSpreadElement} from './renderExpression'
import renderPattern, {renderAssignmentProperty} from './renderPattern'
import renderProgram, {renderImportSpecifierAbstract, renderExportSpecifier, renderModuleDeclaration
	} from './renderProgram'
import renderStatement, {renderSwitchCase} from './renderStatement'
import {badType} from './util'

export default function renderAny(_: Node): void {
	if (_ instanceof AssignmentProperty)
		renderAssignmentProperty(_)
	else if (_ instanceof ClassBody)
		renderClassBody(_)
	else if (_ instanceof ImportSpecifierAbstract)
		renderImportSpecifierAbstract(_)
	else if (_ instanceof ExportSpecifier)
		renderExportSpecifier(_)
	else if (_ instanceof Expression)
		renderExpression(_)
	else if (_ instanceof MethodDefinition)
		renderMethodDefinition(_)
	else if (_ instanceof ModuleDeclaration)
		renderModuleDeclaration(_)
	else if (_ instanceof Program)
		renderProgram(_)
	else if (_ instanceof SpreadElement)
		renderSpreadElement(_)
	else if (_ instanceof Statement)
		renderStatement(_)
	else if (_ instanceof Super)
		renderSuper(_)
	else if (_ instanceof SwitchCase)
		renderSwitchCase(_)
	else if (_ instanceof VariableDeclarator)
		renderVariableDeclarator(_)
	else if (isPattern(_))
		renderPattern(_)
	else
		throw badType(_)
}
