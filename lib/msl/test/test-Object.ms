import
	msl.Object delete-property! empty-Object empty-Object? flag? object-merge map-object-values Map->Object object-select object=? Object->Map property? @properties ?property property-with-proto? ?property-with-proto @all-properties
	.tests

tests 'Object
	flag? ->
		[{a. true} 'a] -> true
		[{a. false} 'a] -> false
		[empty-Object 'a] -> false

	@all-properties -> !\
		obj = {}
		obj.a := 0
		sym = Symbol 's
		Object.defineProperty obj sym
			value. 0
			enumerable. false
		assert set=? (@all-properties [0 0]) ["0" "1" 'length]
		assert set=? (@all-properties obj) ['a sym]
		|| But not 'arguments or 'caller
		assert set=? (@all-properties @all-properties) ['length 'name 'prototype]

	@properties -> !\
		obj = {}
		Object.defineProperty obj 'a
			value. 0
			enumerable. false
		sym = Symbol 's
		Object.defineProperty obj sym
			value. 0
			enumerable. true
		assert empty? (@properties obj)
		assert set=? (@properties @properties) []

	?property ->
		x = {a. 1 b. null}
		[x 'a] -> ?some 1
		[x 'b] -> ?some null
		|| Does not inherit from prototype.
		[x 'toString] -> empty ?

	?property-with-proto ->
		[1 'toString] -> ?some Number.prototype.toString
		[1 'asdfghjkl] -> ?None

	property? ->
		x = {a. 1}
		[x 'a] -> true
		[x 'b] -> false
		[x 'toString] -> false || use p-with-proto? for that.

	property-with-proto? ->
		[empty-Object 'toString] -> true

	object=? ->
		a = {a. 1}
		b = {a. 1}
		c = {x. 3}
		[a b] -> true
		[a c] -> false
		[1 1] -> true
		|| For functions, is identity
		[object=? object=?] -> true

	empty-Object? ->
		[empty-Object] -> true
		[Object] -> false

	Object->Map ->
		[{a. 1 b. 2}] ->
			'a -> 1
			'b -> 2

	Map->Object ->
		todo SYNTAX ['a -> 1, 'b -> 2]
		map =
			'a -> 1
			'b -> 2
		[map] -> {a. 1 b. 2}
		assert =? map (Object->Map (Map->Object map))
		map2 =
			1 -> 2
		[map2] ->
			"1". 2

	delete-property! -> !\
		_ = {}
		_.a := 1
		delete-property! _ 'a
		forbid property? _ 'a

	object-merge ->
		[{a. 1 b. 2} {b. 3 c. 4}] -> {a. 1 b. 3 c. 4}

	object-select ->
		[{a. 1 b. 2 c. 3} 'a 'c] -> {a. 1 c. 3}

	map-object-values ->
		[{a. 1 b. undefined} defined?] -> {a. true b. false}
