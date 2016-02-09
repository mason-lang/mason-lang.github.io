declare module 'assert' {
	export function equal(a: any, b: any): void
}

declare function describe(desc: string, test: () => void): void

declare function it(desc: string, test: () => void): void
