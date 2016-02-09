| Also see .Map.Array-as-Map

import
	...polys set-sub!
	...Type.primitive Num
	...Type.Type =>
	..@ _ -! --! count each! empty! empty? from-stream
	..Set.Set
	.Seq _ <++! ++>! @indexes ?nth ?<pop! ?pop>!
import~
	...math.Number Nat

trait! Array Seq
	static
		todo implement `builder`, then this should be the default
		(from-stream) \stream
			with []
				each! stream _&push

	(count) \
		.length

	(?nth) \n
		if <? n (count this)
			this.(n)

	(<++!) \added:@
		.unshift ...added

	(++>!) \added:@
		.push ...added

	(?<pop!) \
		unless empty? this
			.shift()

	(?pop>!) \
		unless empty? this
			.pop()

	(empty!) !\
		| http://jsperf.com/empty-javascript-array/15
		todo  Test it myself...
		todo SYNTAX while
		for
			unless .length
				break
			.pop()

	(set-sub!) !\n:Nat val
		this.(n) := val

	(-!) !\em
		for @indexes this
			if =? this[_] em
				.splice _ 1
				break

	(--!) !\@deleted
		@deleted := => Set @deleted
		filter! this \em
			with em:@deleted
				if _
					todo  -!
					--! @deleted [em]

todo  impl! filter!
filter!. !\arr keep-if?
	read-idx = 0
	write-idx = 0

	for
		if <=? arr.length read-idx
			break

		here = arr[read-idx]
		if keep-if? here
			arr[write-idx] := here
			write-idx := + 1 write-idx

		read-idx := + 1 read-idx

	arr.length := write-idx

todo rename?
fill. \count:Num filler:Function
	| Creates a new Array by calling `filler` on each number from zero to `count`.
	with new Array count
		for i of @indexes_
			_[i] := filler i
