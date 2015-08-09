
// TODO: Have this generated for me.
const allExports = {
	'!': '!',
	'@': '@.@',
	$: '$',
	$ing: '$',
	'--!': '@.@!',
	'++': '@.@',
	'++!': '@.@!',
	'=>': 'Type.Type',
	'=?': 'compare',
	'<?': 'compare',
	'?': '@.?',
	'Alias-Type': 'Type.Alias-Type',
	Array: '@.Array',
	'Array!': '@.Array!',
	Bool: 'Bool',
	'contains?': 'Type.Type',
	curry: 'Fun',
	'Deque!': '@.Deque!',
	Error: 'Try',
	'each~': 'Generator!',
	extract: 'Type.Type',
	'?find': '@.@',
	'gen-next!': 'Generator.gen-next!',
	Generator: 'Generator',
	'Hash-Map!': '@.Map.Hash-Map!',
	'Hash-Set!': '@.Hash-Set!',
	'Heap-Priority-Queue!': '@.Heap-Priority-Queue!',
	'Id-Map!': '@.Map.Id-Map!',
	'id-memoize': 'Fun',
	'Id-Set!': '@.Id-Set!',
	'id=?': 'js',
	'Impl-Type': 'Type.Impl-Type',
	iterator: '@.@',
	Kind: 'Type.Kind',
	'Lazy-Stream': '@.Lazy-Stream',
	LList: '@.LList',
	Map: '@.Map.Map',
	Method: 'Type.Method',
	Obj: 'Obj',
	'Obj-Type': 'Type.Obj-Type',
	'?pop!': '@.Priority-Queue!',
	'Pred-Type': 'Type.Pred-Type',
	Range: '@.Range',
	Seq: '@.Seq',
	sub: 'methods',
	Str: 'Str',
	Stream: '@.Stream',
	Type: 'Type.Type',
	'Weak-Id-Map!': '@.Map.Weak-Id-Map!',
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
