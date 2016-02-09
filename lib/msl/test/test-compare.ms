import
	msl.compare sorted? sort
	msl.Try fails?
	.tests

tests 'compare
	same? ->
		[count [1] [2]] -> true
		[count [] [1]] -> false

	max -> \
		[[1 3 2]] -> 3
		[[2 1 2]] -> 2 || Doesn't have to be unique
		assert fails? \
			max []

	?max ->
		[[1]] -> ?some 1
		[[]] -> ?None

	max-by -> \
		[['five 'six 'seven] count] -> 'seven
		assert fails? \
			max-by [] identity

	?max-by ->
		[[1] identity] -> ?some 1
		[[] identity] -> ?None

	sorted? ->
		[[]] -> true
		[[1 2 3]] -> true
		[[3 2 1]] -> false
		[['six 'five 'seven] count] -> true

	sort ->
		[[3 2 1]] -> [1 2 3]
		[['five 'six 'seven] count] -> ['six 'five 'seven]
		['bac] -> 'abc
