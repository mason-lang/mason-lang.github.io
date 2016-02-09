import
	...math.Number modulo Nat
	...polys set-sub!
	...Type.Pred-Type Any
	..@ _ ++~ count empty! empty? iterator @map
	..? un-?
	.Seq _ <++! ++>! ?nth ?<pop! ?pop>! @reverse

Deque. class trait Seq
	| Seq that can efficiently add values on either side.

	construct
		.data := Array 8
		.start-index := 0 || Inclusive (unless =? end-index)
		.end-index := 0 || Exclusive

	(iterator) *!\
		indices = case
			.wrapped?
				++~ .start-index...(count .data) 0...(.end-index)
			else
				.start-index...(.end-index)
		for indices
			yield .data[_]

	(<++!) !\ems:@
		for @reverse ems
			new-start = .prev-index .start-index
			case
				=? new-start .end-index
					.expand!()
					<++! this [_]
				else
					.start-index := new-start
					.data[.start-index] := _

	(++>!) !\ems:@
		for ems
			new-end = .next-index .end-index
			case
				=? new-end .start-index
					.expand!()
					++>! this [_]
				else
					.data[.end-index] := _
					.end-index := new-end

		todo  Shrink on occasion

	(?<pop!) \
		unless empty? this
			with .data[.start-index]
				.start-index := .next-index .start-index

	(?pop>!) \
		unless empty? this
			new-end = .prev-index .end-index
			.end-index := new-end
			.data[new-end]

	(?nth) \index:Nat
		todo @for
		@map (.?data-index index) \_
			.data[_]

	(set-sub!) !\index:Nat set-to:Any
		data-index = un-? (.?data-index index) ~"Can't set at index #index; count is #(count this)."
		.data[data-index] := set-to

	(empty!) !\
		empty! .data
		.start-index := 0
		.end-index := 0

	my get capacity
		count .data

	my expand! !\
		old-data = .data
		old-capacity = .capacity
		new-capacity = * 2 old-capacity
		new-data = new Array new-capacity
		for 0...old-capacity
			new-data[_] := old-data[_]
		.data := new-data

	my wrap-index \index
		modulo index .capacity

	my next-index \index
		.wrap-index + index 1

	my prev-index \index
		.wrap-index - index 1

	my get wrapped?
		<? .end-index .start-index

	my ?data-index \index
		a = + .start-index index
		case
			<? a .capacity
				if or .wrapped? <? a .end-index
					a
			else
				b = .wrap-index a
				if and .wrapped? <? b .end-index
					b
