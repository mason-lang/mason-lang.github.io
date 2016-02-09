import
	msl.assert assert-call!
	..tests

tests 'Range
	Range -> !\
		assert seq=? 0..2 (@take~ 0... 3)
		|| Can't give wrong sign of step
		todo assert fails? !\
		todo	(0...10).by -1

	iterator -> !\
		todo assert seq=? (new Range 0 10 2) [0 2 4 6 8]
		pass

	?nth ->
		r = (0...10).by 2
		[r 2] -> ?some 4
		[r 6] -> ?None

	count ->
		[((0...2).by 0.5)] -> 4

	'length -> !\
		assert-call! &.length
			[5...10] -> 5
			[((5...10).by 2)] -> 5

	@reverse ->
		[0...5] -> 4...-1
		[5...0] -> 1...6
		[((0..5).by 2)] -> (4..0).by -2
