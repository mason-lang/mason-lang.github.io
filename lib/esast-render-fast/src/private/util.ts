export function badType(_: any): Error {
	return new Error(`Did not expect a ${_.constructor.name} here.`)
}

export function isEmpty<A>(arr: Array<A>): boolean {
	return arr.length === 0
}

export function last<A>(arr: Array<A>): A {
	return arr[arr.length - 1]
}
