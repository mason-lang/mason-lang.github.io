import
	..tests

|| Least-significant to most-significant, but order doesn't matter.
@digits = \_
	base = 10
	todo SYNTAX @for~
	new Stream *!\
		for
			yield % _ base
			_ := int/ _ base
			if =? _ 0
				break

happy-step = \_
	sum (@map~ @digits_ &(** _ 2))

cache = new Id-Map
cache[1] := true

happy?. \n:Nat
	| http://rosettacode.org/wiki/Happy_numbers
	stepped-through = empty Id-Set
	cur = n
	n-happy? = for
		case ?get cache cur
			:?some _
				break _
			else
				if cur:stepped-through
					break false
				todo  +!
				++! stepped-through [cur]
				cur := happy-step cur
	with n-happy?
		cache[n] := _
		for stepped-through
			cache[_] := n-happy?

happy-numbers:Stream[Nat].
	| Stream of all happy numbers.
	@keep~ 1... happy?

tests 'demo
	happy-numbers -> !\
		assert seq=? (@take happy-numbers 8)
			. 1
			. 7
			. 10
			. 13
			. 19
			. 23
			. 28
			. 31
