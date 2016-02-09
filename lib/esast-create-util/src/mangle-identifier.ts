/** Convert a name (any string) to a valid JavaScript identifier. */
export default function mangleIdentifier(name: string): string {
	return forbiddenNames.has(name) ?
		`_${name}` :
		name.replace(/[^a-zA-Z0-9$_]/g, _ => `_${_.charCodeAt(0)}`)
}

/** `false` iff `name` is a valid JavaScript identifier. */
export function needsMangle(name: string): boolean {
	return forbiddenNames.has(name) || !propertyNameOk(name)
}

/** `true` iff `name` can be used as a property name using dot syntax (`a.b`). */
export function propertyNameOk(name: string): boolean {
	return name.search(/[^a-zA-Z0-9$_]/) === -1
}

/** Undoes [[mangleIdentifier]]. */
export function unmangle(name: string): string {
	if (name[0] === '_') {
		const rest = name.slice(1)
		if (forbiddenNames.has(rest))
			return rest
	}
	return name.replace(/_\d+/g, match => {
		const charCodeString = match.slice(1)
		const charCode = Number.parseInt(charCodeString, 10)
		const char = String.fromCharCode(charCode)
		return char === '\0' ? match : char
	})
}

/** Set of all JavaScript keywords. */
export const forbiddenNames: Set<string> = new Set([
	'abstract',
	'arguments',
	'boolean',
	'break',
	'byte',
	'case',
	'catch',
	'char',
	'class',
	'comment',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'double',
	'else',
	'enum',
	'eval',
	'export',
	'extends',
	'false',
	'final',
	'finally',
	'float',
	'for',
	'function',
	'function*',
	'goto',
	'if',
	'implements',
	'import',
	'in',
	'instanceOf',
	'int',
	'interface',
	'label',
	'long',
	'module',
	'native',
	'new',
	'null',
	'package',
	'private',
	'protected',
	'public',
	'return',
	'short',
	'static',
	'super',
	'switch',
	'synchronized',
	'this',
	'throw',
	'throws',
	'transient',
	'true',
	'try',
	'typeof',
	'var',
	'void',
	'while',
	'with',
	'yield'
])
