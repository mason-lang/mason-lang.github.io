import Declaration from 'esast/lib/Declaration'
import Expression from 'esast/lib/Expression'
import Program, {ExportAllDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration,
	ExportSpecifier, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier,
	ImportSpecifier, ImportSpecifierAbstract, Module, ModuleDeclaration, Script
	} from 'esast/lib/Program'
import Statement from 'esast/lib/Statement'
import {o, setAst} from './context'
import {nonNull} from 'op/Op'
import renderDeclaration from './renderDeclaration'
import renderExpression from './renderExpression'
import renderIdentifier from './renderIdentifier'
import {renderLiteralString} from './renderLiteral'
import renderStatement from './renderStatement'
import {interleave, lines} from './renderUtil'
import {badType, isEmpty} from './util'

export default function renderProgram(_: Program): void {
	setAst(_)
	if (_ instanceof Script)
		lines(_.body, ';', renderStatement)
	else if (_ instanceof Module)
		lines(_.body, ';', renderStatementOrModuleDeclaration)
	else
		throw badType(_)
}

export function renderModuleDeclaration(_: ModuleDeclaration): void {
	setAst(_)

	if (_ instanceof ImportDeclaration)
		renderImportDeclarationNoLoc(_)

	else if (_ instanceof ExportNamedDeclaration) {
		const {declaration, specifiers, source} = _
		o('export ')
		if (nonNull(declaration))
			renderDeclaration(declaration)
		else {
			o('{')
			interleave(specifiers, renderExportSpecifier, ',')
			o('}')
			if (nonNull(source)) {
				o(' from ')
				renderLiteralString(source)
			}
		}

	} else if (_ instanceof ExportDefaultDeclaration) {
		o('export default ')
		renderDeclarationOrExpression(_.declaration)

	} else if (_ instanceof ExportAllDeclaration) {
		o('export * from ')
		renderLiteralString(_.source)

	} else
		throw badType(_)
}

function renderImportDeclarationNoLoc({specifiers, source}: ImportDeclaration): void {
	o('import ')

	let def: ImportDefaultSpecifier, namespace: ImportNamespaceSpecifier
	const importSpecifiers: Array<ImportSpecifier> = []
	for (const s of specifiers)
		if (s instanceof ImportDefaultSpecifier)
			if (def === undefined)
				def = s
			else
				throw new Error('Multiple default imports')
		else if (s instanceof ImportNamespaceSpecifier)
			if (namespace === undefined)
				namespace = s
			else
				throw new Error('Multiple namespace imports')
		else if (s instanceof ImportSpecifier)
			importSpecifiers.push(s)
		else
			throw badType(s)

	let needComma = false
	if (def !== undefined) {
		renderImportDefaultSpecifier(def)
		needComma = true
	}
	if (namespace !== undefined) {
		if (needComma)
			o(',')
		renderImportNamespaceSpecifier(namespace)
		needComma = true
	}
	if (!isEmpty(importSpecifiers)) {
		if (needComma)
			o(',')
		o('{')
		interleave(importSpecifiers, renderImportSpecifier, ',')
		o('}')
	}

	o(' from ')
	renderLiteralString(source)
}

export function renderExportSpecifier(_: ExportSpecifier): void {
	setAst(_)
	const {exported, local, shorthand} = _
	renderIdentifier(local)
	if (!shorthand) {
		o(' as ')
		renderIdentifier(exported)
	}
}

export function renderImportSpecifierAbstract(_: ImportSpecifierAbstract): void {
	if (_ instanceof ImportSpecifier)
		renderImportSpecifier(_)
	else if (_ instanceof ImportDefaultSpecifier)
		renderImportDefaultSpecifier(_)
	else if (_ instanceof ImportNamespaceSpecifier)
		renderImportNamespaceSpecifier(_)
	else
		throw badType(_)
}

function renderImportSpecifier(_: ImportSpecifier): void {
	setAst(_)
	const {imported, local, shorthand} = _
	renderIdentifier(imported)
	if (!shorthand) {
		o(' as ')
		renderIdentifier(local)
	}
}

function renderStatementOrModuleDeclaration(_: Statement | ModuleDeclaration): void {
	if (_ instanceof Statement)
		renderStatement(_)
	else
		renderModuleDeclaration(_)
}

function renderImportDefaultSpecifier(_: ImportDefaultSpecifier): void {
	setAst(_)
	renderIdentifier(_.local)
}

function renderImportNamespaceSpecifier(_: ImportNamespaceSpecifier): void {
	setAst(_)
	o('* as ')
	renderIdentifier(_.local)
}

function renderDeclarationOrExpression(_: Declaration | Expression): void {
	if (_ instanceof Expression)
		renderExpression(_)
	else
		renderDeclaration(_)
}
