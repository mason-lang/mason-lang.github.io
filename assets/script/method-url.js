
// TODO: Have this generated for me.
const allExports = {
	'!': '!',
	'@': '@.@',
	$: '$',
	$ing: '$',
	'<?': 'compare',
	'?': '@.?',
	Bool: 'Bool',
	'contains?': 'Type.Type',
	curry: 'Fun',
	Error: 'Try',
	'each~': 'Generator!',
	'?find': '@.@',
	Fun: 'Fun',
	'Generator!': 'Generator!',
	'Impl-Type': 'Type.Impl-Type',
	Kind: 'Type.Kind',
	Map: '@.Map.Map',
	Method: 'Type.Method',
	Obj: 'Obj',
	'Obj-Type': 'Type.Obj-Type',
	'Pred-Type': 'Type.Pred-Type',
	show: 'show',
	sub: 'methods',
	Str: 'Str',
	Stream: '@.Stream',
	Type: 'Type.Type',
	'Wrap-Type': 'Type.Wrap-Type'
}
const exportPaths = {}
Object.keys(allExports).forEach(function(key) {
	const use = allExports[key]
	const relUrl = use.replace('.', '/')
	exportPaths[key] = 'https://github.com/andy-hanson/mason/tree/master/src/' + relUrl + '.ms'
})

export default methodName =>
	exportPaths[methodName]
