use
	msl.@.Map.Map ?get
	msl.Object p

# TODO: Have this generated for me.
all-exports =
	!. "!"
	@. "@.@"
	$. "$"
	$ing. "$"
	--!. "@.@!"
	++. "@.@"
	++!. "@.@!"
	=>. "Type.Type"
	=?. "compare"
	<?. "compare"
	?. "@.?"
	Alias-Type. "Type.Alias-Type"
	contains?. "Type.Type"
	curry. "Function"
	Deque. "@.Deque"
	extract. "Type.Type"
	?find. "@.@"
	gen-next!. "Generator.gen-next!"
	Generator. "Generator"
	Hash-Map!. "@.Map.Hash-Map"
	Hash-Set. "@.Hash-Set"
	Heap-Priority-Queue!. "@.Heap-Priority-Queue"
	Id-Map!. "@.Map.Id-Map!"
	id-memoize. "Function"
	Id-Set!. "@.Id-Set!"
	id=?. "js"
	Impl-Type. "Type.Impl-Type"
	iterator. "@.@"
	Kind. "Type.Kind"
	Lazy-Stream. "@.Lazy-Stream"
	LList. "@.LList"
	Map. "@.Map.Map"
	Method. "Type.Method"
	?pop!. "@.Priority-Queue!"
	Pred-Type. "Type.Pred-Type"
	Range. "@.Range"
	Seq. "@.Seq"
	sub. "methods"
	Str. "Str"
	Stream. "@.Stream"
	Type. "Type.Type"
	Weak-Id-Map!. "@.Map.Weak-Id-Map!"
	Wrap-Type. "Type.Wrap-Type"

export-paths =
	# TODO:SYNTAX build
	0 -> 0
	for! Object.keys all-exports
		url = p all-exports _
		rel-url = url.replace "." "/"
		escaped-url = (rel-url.replace "@" "%40").replace "?" "%3F"
		_ -> "https://github.com/andy-hanson/mason/tree/master/src/{escaped-url}.ms"

|method-name:String
	?get export-paths method-name
