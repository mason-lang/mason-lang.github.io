import
	..tests

fibs =
	rec = *!\prev:Nat cur:Nat
		yield cur
		yield* rec cur + prev cur
	new Stream rec[0 1]

zeckendorf. \n:Nat
	| http://rosettacode.org/wiki/Zeckendorf_number_representation
	z-fibs = @tail fibs || Don't include the first `1`, so `[1 2 3 5 8 ...]`.
	candidate-fibs = @reverse (@take-while~ z-fibs \_
		<=? _ n || Highest numbers go first
	left = n
	digits = @map candidate-fibs \case
		<=? _ left
			left := - left _
			1
		else
			0
	assert =? 0 left || We should have managed to add up to `n` exactly.
	=> String digits

tests 'demo
	zeckendorf ->
		[0] -> ""
		[1] -> "1"
		[19] -> "101001"
		[1111] -> "100001010000001"
