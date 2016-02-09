import
	..tests

tests 'util
	average ->
		[[0 1 2]] -> 1
		[[]] -> Number.NaN
