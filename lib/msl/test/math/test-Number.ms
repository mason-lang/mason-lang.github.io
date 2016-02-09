import
	msl.Function spread!
	msl.math.Number mid near-0? near?
	..tests

tests 'Number
	Int -> !\
		assert-int! = !\_
			assert _:Int
		forbid-int! = !\_
			forbid _:Int
		spread! assert-int!
			. 1
			. Number.MIN_SAFE_INTEGER
			. Number.MAX_SAFE_INTEGER
		spread! forbid-int!
			. 1.1
			. - Number.MIN_SAFE_INTEGER 1
			. + Number.MAX_SAFE_INTEGER 1

	Nat -> !\
		assert 0:Nat
		forbid -1:Nat

	int/ ->
		[3 2] -> 1
		[-3 2] -> -2

	modulo ->
		[2 3] -> 2
		[2 -3] -> 2
		[-2 3] -> 1
		[-2 -3] -> 1

	divisible? ->
		[4 2] -> true
		[4 -2] -> true
		[3 2] -> false

	log-base -> \
		assert near? (log-base 10 0.01) -2
		[2 8] -> 3

	near? ->
		[1000.9 1000 3] -> true
		[1000.9 1000 4] -> false
		[0.001001 0.001 3] -> true
		[0.001001 0.001 4] -> false
		[0.001 -0.001 1] -> false || Numbers with different signs are never near.
		region Behaves like `near-0?` when an arg is 0
			[0.00999 0 2] -> true
			[0 0.00999 2] -> true

	near-0? ->
		[0.00999 2] -> true
		[0.01 2] -> false

	nearest-ceil ->
		[1 2] -> 2

	nearest-floor ->
		[1 2] -> 0

	nearest-round ->
		[1 2] -> 2
		[0.9 2] -> 0

	mid ->
		[0 1] -> 0.5
