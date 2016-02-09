import
	msl.@.Seq.Seq <++~ @groups-of~
	msl.Try fails?
	...tests

tests 'Seq
	<++~ -> !\
		todo
		pass

	first ->
		[[1 2]] -> 1
		assert fails? \
			first []

	?first ->
		[[1 2]] -> ?some 1
		[[]] -> ?None

	last -> !\
		[[1 2]] -> 2
		assert fails? \
			last []

	?last ->
		[[1 2]] -> ?some 2
		[[]] -> ?None

	@tail ->
		[[1 2]] -> [2]
		[[]] -> []

	@rtail ->
		[[1 2]] -> [1]
		[[]] -> []

	seq=? -> !\
		s = new Stream *!\
			yield 1
		[s [1]] -> true
		[s [2]] -> false

	?nth ->
		[[0 1] 1] -> ?some 1
		[[0 1] 2] -> ?None

	sub -> \
		[[0 1] 1] -> 1
		assert fails? \
			[0 1][2]

	@slice ->
		[[0 1 2 3] 1 3] -> [1 2]

	@slice~ ->
		[[0 1 2 3] 1 3] -> => Stream [1 2]

	@take~ -> \
		[[0 1 2] 2] -> => Stream [0 1]
		|| OK if not enough to satisfy count-to-take
		[[0] 2] -> => Stream [0]
		_ = [0 1 2 3 4]
		assert seq=? _ (++ (@take~ _ 2) (@drop~ _ 2))

	@take-while~ ->
		[[1 2 -1 3] &(>? _ 0)] -> => Stream [1 2]

	@drop~ ->
		[[0 1 2 3] 2] -> => Stream [2 3]

	@zip ->
		[[1 2] [10 20] &+] -> [11 22]

	@zip~ ->
		[[1 2] [10 20 30] &+] -> => Stream [11 22]

	@groups-of~ -> \
		[2 [1 2 3 4]] -> => Stream [[1 2] [3 4]]
		|| Tosses off partial group at end (e.g. no [4])
		[3 [1 2 3 4]] -> => Stream [[1 2 3]]
		assert seq=? [[] [] []] (@take~ (@groups-of~ 0 [1]) 3)

	@indexes ->
		[[0 0 0]] -> 0..2

	@reverse ->
		[[1 2]] -> [2 1]

	@reverse~ -> !\
		todo
		pass

	@split~ ->
		[[1 0 1] &=?[0]] -> => Stream [[1] [1]]
		[[0] &=?[0]] -> => Stream [[] []]
