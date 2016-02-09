import TemplateLiteral, {TaggedTemplateExpression, TemplateElement} from 'esast/lib/TemplateLiteral'
import {o, oWithNewlines, setAst} from './context'
import renderExpression from './renderExpression'

function renderTemplateLiteral(_: TemplateLiteral): void {
	setAst(_)
	renderTemplateLiteralNoLoc(_)
}

export function renderTemplateLiteralNoLoc({quasis, expressions}: TemplateLiteral): void {
	o('`')
	renderTemplateElement(quasis[0])
	for (let i = 0; i < expressions.length; i = i + 1)	 {
		o('${')
		renderExpression(expressions[i])
		o('}')
		renderTemplateElement(quasis[i + 1])
	}
	o('`')
}

function renderTemplateElement(_: TemplateElement): void {
	setAst(_)
	oWithNewlines(_.value.raw)
}

export function renderTaggedTemplateExpressionNoLoc({tag, quasi}: TaggedTemplateExpression): void {
	renderExpression(tag)
	renderTemplateLiteral(quasi)
}
