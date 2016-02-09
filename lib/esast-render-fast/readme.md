Super-fast renderer for [esast](https://github.com/esast/esast).
Output is not very pretty. For beauty use [escodegen](https://github.com/estools/escodegen) instead.
(escodegen will work on esast trees because they mimic untyped trees.)

## Install

	npm install --save esast/esast-render-fast
	# or:
	bower install --save esast/esast-render-fast


## Use

	import {BinaryExpression, LiteralNumber} from 'esast/lib/Expression'
	import render, {renderWithSourceMap} from 'esast-render-fast/lib/render'

	const four = new BinaryExpression('+', new LiteralNumber(2), new LiteralNumber(2))

	const rendered = render(four, {ugly: false})

	// four.left.loc = ...; four.right.loc = ...; four.loc = ...
	const {code, sourceMap} = renderWithSourcemap(four, 'input-file.xyz', 'output-file.js', {ugly: false})

## Time

Here are estimates of rendering time when run on a sample tree (the escodegen source code).

Name | Render time | Render time with source maps
:-: | :-: | :-:
esast-render-fast | 8ms | 32ms
[escodegen](https://github.com/estools/escodegen) | 7ms | 120ms
[esotope](https://github.com/inikulin/esotope) | 2.5ms | not supported

Converting from an untyped tree takes about 6ms, so using esast-render-fast won't help your render times if you're not directly construction esast trees. (And if not, why not?)
