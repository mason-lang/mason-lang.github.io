import
	...compare binary=? same?
	...Type.Type => has-instance? type-of
	..@ _ all? count empty @keep
import~
	.Hash-Set

Set. trait @
	| @ without repeat values.
	todo more doc

	static
		(empty) \
			empty Hash-Set

	(binary=?) \other
		| Two Sets are =? if they have the same type and contain the same values.
		and (same? type-of this other) (set=? this other)

intersect. poly \@intersect-with
	todo doc
	@keep this has-instance?[(=> Set @intersect-with)]

set=?. \a:@ b:@
	| Whether two @s have the same values, regardless of order or count.
	a-set = => Set a
	b-set = => Set b
	and (same? count a-set b-set) (all? a &(:b-set))
