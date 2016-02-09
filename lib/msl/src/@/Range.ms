import
	..math.Number Nat
	..private.bootstrap msDef
	..Type.primitive Num
	.@ _ count empty from-stream iterator
	.Seq.Seq ?nth @reverse

Range. class start:Num end:Num step:Num trait @
	| Seq of Nums taking fixed steps.
	| `start` is inclusive, `end` is exclusive.

	static
		(empty) \
			0...0

		(from-stream) \_
			todo We can't build a Range out of arbitrary elements...
			todo consider using Symbol.species for this sort of thing?
			todo impl-for from-stream Array
			_
	todo assert same? Math.sign step - end start

	by \step
		new Range .start .end step

	get length
		- .end .start

	(iterator) *!\
		cur = .start
		for
			break-cond = case
				<? 0 .step
					>=? cur .end
				else
					<=? cur .end
			if break-cond
				break

			yield cur
			cur := + cur .step

	|| Below functions can be implemented more efficiently than the defaults.

	(?nth) \n:Nat
		todo  Function if-test ?
		it = + .start * .step n
		if <? it .end
			it

	(count) \
		Math.floor / .length .step

	(@reverse) \
		new-step = neg .step
		rem = % (- .end .start) .step
		switch rem
			0
				new Range (- .end .step) (- .start .step) new-step
			else
				new Range (- .end rem) .start new-step

msDef 'range \start end exclusive?
	unless exclusive?
		end := + end (Math.sign - end start)
	step = Math.sign - end start
	new Range start end step
