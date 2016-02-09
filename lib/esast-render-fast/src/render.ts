import Node from 'esast/lib/Node'
import {finish, finishWithSourceMap, setUp, setUpSourceMap} from './private/context'
import renderAny from './private/renderAny'

/** Create JavaScript source code from a [[Node]]. */
export default function render(ast: Node, options: RenderOptions = {}): string {
	setUp(options)
	renderAny(ast)
	return finish()
}

/**
Same as [[render]], but with a source map as part of the output.
@param inFilePath Name of input file.
@param outFilePath Name of output file.
*/
export function renderWithSourceMap(
	ast: Node,
	inFilePath: string,
	outFilePath: string,
	options: RenderOptions = {})
	: {code: string, sourceMap: string} {
	setUp(options)
	setUpSourceMap(inFilePath, outFilePath)
	renderAny(ast)
	return finishWithSourceMap()
}

export interface RenderOptions {
	/** If true, will not render unnecessary whitespace. */
	ugly?: boolean
}
