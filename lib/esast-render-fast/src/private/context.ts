import Node from 'esast/lib/Node'
import {Pos} from 'esast/lib/Loc'
import Op, {nonNull} from 'op/Op'
import {SourceMapGenerator} from 'source-map/dist/source-map.min'
import {RenderOptions} from '../render'
import {last} from './util'

// rendering
let strOut: string
let indentAmount: number
let indentStr: string
// source maps
let usingSourceMaps: boolean
let curAst: Node
let inFilePath: string
let sourceMap: SourceMapGenerator
let outLine: number
let outColumn: number
let lastMappedAst: Op<Node>

// options
let ugly: boolean

export function setUp(options: RenderOptions): void {
	ugly = Boolean(options.ugly)

	indentAmount = 0
	setIndent()
	strOut = ''
	usingSourceMaps = false
}

export function setUpSourceMap(inPath: string, outPath: string): void {
	usingSourceMaps = true
	inFilePath = inPath
	sourceMap = new SourceMapGenerator({file: outPath})
	outLine = Pos.start.line
	outColumn = Pos.start.column
	lastMappedAst = null
}

export function finish(): string {
	const _ = strOut
	freeMemory()
	return _
}

export function finishWithSourceMap(): {code: string, sourceMap: string} {
	const _ = {code: strOut, sourceMap: sourceMap.toJSON()}
	freeMemory()
	return _
}

function freeMemory(): void {
	strOut = inFilePath = sourceMap = curAst = lastMappedAst = null
}

/** Set the current Node for source mapping. */
export function setAst(_: Node): void {
	curAst = _
}

// Outputs a string.
// str may not contain newlines.
export function o(str: string): void {
	strOut = strOut + str
	if (usingSourceMaps)
		mapStr(str)
}

export function oWithNewlines(str: string): void {
	const parts = str.split('\n')
	o(parts[0])
	for (let i = 1; i < parts.length; i = i + 1) {
		strOut = `${strOut}\n`
		mapNewLine()
		o(parts[i])
	}
}

const indentStrs = ['']
function setIndent(): void {
	indentStr = indentStrs[indentAmount]
	while (indentStr === undefined) {
		indentStrs.push(`${last(indentStrs)}\t`)
		indentStr = indentStrs[indentAmount]
	}
}

export function indent(): void {
	if (!ugly) {
		indentAmount = indentAmount + 1
		setIndent()
	}
}

export function unindent(): void {
	if (!ugly) {
		indentAmount = indentAmount - 1
		setIndent()
	}
}

export function nl(): void {
	if (!ugly) {
		strOut = `${strOut}\n${indentStr}`
		if (usingSourceMaps)
			mapNewLine()
		outColumn = outColumn + indentAmount
	}
}

function mapStr(str: string): void {
	if (curAst !== lastMappedAst) {
		const {loc} = curAst
		if (nonNull(loc)) {
			sourceMap.addMapping({
				source: inFilePath,
				original: loc.start,
				generated: new Pos(outLine, outColumn)
			})
			lastMappedAst = curAst
		}
	}
	outColumn = outColumn + str.length
}

function mapNewLine(): void {
	outLine = outLine + 1
	outColumn = Pos.start.column
	// Mappings end at end of line. Must begin anew.
	lastMappedAst = null
}
