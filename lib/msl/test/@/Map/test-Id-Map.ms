import
	...tests

tests 'Id-Map
	Id-Map -> !\
		todo  Just use generic Map test
		_ = empty Id-Map
		_[1] := 2
		assert =? _[1] 2
		key-1 =
			a. 1
		_[key-1] := 3
		assert =? _[key-1] 3
		key-2 =
			a. 1
		_[key-2] := 4
		|| The two keys have different identity, so they map to different values.
		assert =? _[key-1] 3
		assert =? _[key-2] 4

		assert seq=? @keys_ [1 key-1 key-2]
		assert seq=? @values_ [2 3 4]
