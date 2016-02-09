import
	msl.hash-code
	.tests

tests 'hash-code
	hash-code -> !\
		a =
			x. 1
			y. 2
		b =
			x. 1
			y. 1
		assert =? (hash-code a) (hash-code a)
		forbid =? (hash-code a) (hash-code b)
		todo  Check that it handles recursive values

	todo Better way of testing "String's hash code"
	String -> !\
		assert =? (hash-code 'a) (hash-code 'a)
		forbid =? (hash-code 'a) (hash-code 'b)

	Symbol -> !\
		sym = Symbol 'test
		assert =? (hash-code sym) (hash-code sym)

