import {BlockStatement} from 'esast/lib/Statement'
import {setAst} from './context'
import renderStatement from './renderStatement'
import {block} from './renderUtil'

export default function renderBlockStatement(_: BlockStatement): void {
	setAst(_)
	renderBlockStatementNoLoc(_)
}

export function renderBlockStatementNoLoc(_: BlockStatement): void {
	block(_.body, ';', renderStatement)
}
