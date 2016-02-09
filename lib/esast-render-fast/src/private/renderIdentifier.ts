import Identifier from 'esast/lib/Identifier'
import {o, setAst} from './context'

export default function renderIdentifier(_: Identifier): void {
	setAst(_)
	renderIdentifierNoLoc(_)
}

export function renderIdentifierNoLoc(_: Identifier): void {
	o(_.name)
}
