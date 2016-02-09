import Op, {nonNull} from 'op/Op'
import {o, indent, nl, unindent} from './context'
import {isEmpty} from './util'

export function interleave<A>(asts: Array<A>, render: (ast: A) => void, str: string): void {
	if (!isEmpty(asts)) {
		const maxI = asts.length - 1
		for (let i = 0; i < maxI; i = i + 1) {
			render(asts[i])
			o(str)
		}
		render(asts[maxI])
	}
}

export function paren<A>(asts: Array<A>, render: (ast: A) => void): void {
	o('(')
	interleave(asts, render, ',')
	o(')')
}

export function block<A>(
	blockLines: Array<A>,
	lineSeparator: Op<string>,
	render: (ast: A) => void)
	: void {
	if (isEmpty(blockLines))
		o('{}')
	else {
		o('{')
		indent()
		nl()
		lines(blockLines, lineSeparator, render)
		unindent()
		nl()
		o('}')
	}
}

export function lines<A>(
	lines: Array<A>,
	lineSeparator: Op<string>,
	render: (ast: A) => void)
	: void {
	if (lines.length > 0) {
		const maxI = lines.length - 1
		for (let i = 0; i < maxI; i = i + 1) {
			render(lines[i])
			if (nonNull(lineSeparator))
				o(lineSeparator)
			nl()
		}
		render(lines[maxI])
	}
}
