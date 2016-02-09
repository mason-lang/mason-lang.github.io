declare module 'source-map/dist/source-map.min' {
	class SourceMapGenerator {
		constructor(options: {file: string})
		addMapping(mapping: {source: string, original: Pos, generated: Pos}): void
		toJSON(): string
	}

	interface Pos {
		line: number,
		column: number
	}
}
