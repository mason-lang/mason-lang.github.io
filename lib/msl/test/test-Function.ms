import
	msl.control build
	msl.Function id-memoize hash-memoize spread spread! thunk
	.tests

tests 'Function
	identity ->
		[1] -> 1

	id-memoize -> !\
		assert seq=? [1 2 1] (build !\build!
			get-a = id-memoize \x
				build! x.a
				x.a
			a1 = {a. 1}
			assert =? (get-a a1) 1
			assert =? (get-a a1) 1
			assert =? (get-a {a. 2}) 2
			assert =? (get-a {a. 1}) 1

	hash-memoize -> !\
		assert seq=? [1 2] (build !\build!
			get-a = hash-memoize \x
				build! x.a
				x.a
			a1 = {a. 1}
			assert =? (get-a a1) 1
			assert =? (get-a a1) 1
			assert =? (get-a {a. 2}) 2
			assert =? (get-a {a. 1}) 1

	spread -> !\
		all-4 = \a b c d
			[a b c d]
		assert seq=? (spread all-4 1 2 3 [4 5])
			. [1 2 3 4]
			. [1 2 3 5]

		y = spread all-4 1 2
			3 -> 4
			5 -> 6
		assert seq=? y
			. [1 2 3 4]
			. [1 2 5 6]

		assert seq=? (spread all-4 1 2 {three. 4 five. 6})
			. [1 2 'three 4]
			. [1 2 'five 6]

	spread! -> !\
		assert =? [1 2 3] (build \build!
			f = !\a b c
				build! a
				build! b
				build! c
			spread! f 1
				2 -> 3

	thunk -> !\
		assert =? (thunk 1)() 1

	sub -> !\
		|| sub for Functions
		+1 = &+[1]
		assert =? (+1 1) 2
		all-3 = \a b c
			[a b c]
		one-two = all-3[1 2]
		assert =? (one-two 3) [1 2 3]

		|| sub for Function itself
		assert =? Function[Function Function] Function
