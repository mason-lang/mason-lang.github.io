import
	...tests

tests 'Hash-Map
	todo Remove, just use Map.implementor-test.
	Hash-Map -> !\
		_ = => Hash-Map
			1 -> 2
			3 -> 4
		assert =? _[1] 2
		assert =? _[3] 4
		assert seq=? _
			. [1 2]
			. [3 4]
		assert seq=? @keys_ [1 3]
		assert =? ?None (?get _ 8)
