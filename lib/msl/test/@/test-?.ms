import
	msl.Try fails?
	..tests

tests '?
	Opt->? ->
		[0] -> ?some 0
		[null] -> ?some null
		[undefined] -> ?None

	?->Opt ->
		[(?some 0)] -> 0
		[?None] -> undefined

	un-? -> \
		[(?some 1)] -> 1
		assert fails? !\
			un-? ?None

	?-or ->
		[?None 1] -> 1
		[(?some 1) 2] -> 1

	?-cond ->
		[?None 0 &(_)] -> 0
		[(?some 1) 0 &(_)] -> 1

	extract -> !\
		case ?some 1
			:?some val
				assert =? val 1
