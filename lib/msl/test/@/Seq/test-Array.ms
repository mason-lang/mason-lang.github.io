import
	msl.@.Seq.Array filter! fill
	...tests

tests 'Array
	filter! -> !\
		arr = [1 2 3 4 5]
		filter! arr \_
			divisible? _ 2
		assert =? arr [2 4]

	fill ->
		[3 identity] -> [0 1 2]
