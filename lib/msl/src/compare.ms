import
	.js defined?
	.private.bootstrap msDef
	.Type.Poly
import~
	.@.@ _ all? empty? from-stream iterator
	.@.? un-?
	.@.Seq.Seq _ first @tail
	.control opr
	.Function identity
	.Object object=?
	.Type.Pred-Type Opt

todo ES8 This will be replaced by operator overloading.
binary=?. new Poly
	| Poly used to implement the `=?` operator.
	| Unlike `=?`, this takes only 2 arguments.

	| Values can be `=?` but not `object=?` if they are conceptually the same, but have different representations.
	| For example, two Sets with the same values might internally have different ordering.

	| Values of different types should generally not be =?.
	| For example, [1 2 3] is not `=?` (=> Stream [1 2 3]), but it is `seq=?`.
	| Unlike other comparison methods, `=?` should not make assertions about type.
	name.
	allow-null?. true
	args. ['other]
	default. .\other
		todo To be more like js, this shouldn't use object=? by default.
		or (==? this other) (object=? this other)

|| To compare more than 2 values, compiler generates calls to 'eqMany in operators.ms.
msDef 'eq binary=?

compare. poly \other
	| A Number < 0 if a < b, > 0 if a > b, and = 0 if a = b.
	| It could be implemented as:

	|	 case
	|		<? a b
	|			-1
	|		>? a b
	|			1
	|		else
	|			0

	| But instead, other comparison operators are defined in terms of this.
	| `compare a b` should always be `neg compare b a`.
	abstract

todo ES8 These will be replaced by operator overloading. Then can just use <?.

lt?. \a b
	<? (compare a b) 0

lte?. \a b
	<=? (compare a b) 0

gt?. \a b
	>? (compare a b) 0

gte?. \a b
	>=? (compare a b) 0

region Misc
	same?. \fun:Function a b
		| Whether two values have the same `f`.
		=? (fun a) (fun b)

	todo compare to =?
	all-same?. \@coll:@ fun:Opt[Function]
		fun := opr fun identity
		or (empty? @coll)
			fst = fun @coll[0]
			all? (@tail @coll) &(=? fst fun_)


region Min/max
	min. \_:@
		min-by _ identity

	?min. \_:@
		?min-by _ identity

	min-by. \_:@ by:Function
		un-? (?min-by _ by) "Can not take min of empty."

	?min-by. \_:@ by:Function
		unless empty?_
			iter = iterator_
			value = iter.next().value
			cur-min = value
			cur-min-by = by value
			for
				{value done} = iter.next()
				if done
					break cur-min
				value-by = by value
				if >? cur-min-by value-by
					cur-min := value
					cur-min-by := value-by

	todo  Poly, specialize on Sorted-Set
	max. \_:@
		| An element that is >=? all others. Fails when empty.
		max-by _ identity

	?max. \_:@
		| Like max, but returns empty ? for empty.
		?max-by _ identity

	max-by. \_:@ by:Function
		| An element whose `by em` is >=? all other elements' `by em`s.
		| Like `max (map _ by)` except the mapping is not applied to the result.
		un-? (?max-by _ by) "Can not take max of empty."

	?max-by. \_:@ by:Function
		| Like max-by, but returns empty ? for empty.
		unless empty?_
			iter = iterator_
			value = iter.next().value
			cur-max = value
			cur-max-by = by value
			for
				{value done} = iter.next()
				if done
					break cur-max
				value-by = by value
				if <? cur-max-by value-by
					cur-max := value
					cur-max-by := value-by

region Sorting
	sorted?. \seq:Seq sort-by:Opt[Function]
		| Whether it is already in sorted order.
		sort-by := opr sort-by identity
		case seq
			empty?_
				true
			else
				sb-prev = sort-by first_
				all? @tail_ \em
					sb-cur = sort-by em
					with <? sb-prev sb-cur
						sb-prev := sb-cur

	todo sort-by: Opt[Function]
	sort. poly \sort-by
		| Puts the elements in sorted order.
		| Order is determined by calling `compare`.
		| Optional `sort-by` determines an attribute of elements to be compared.

		|| Ensure that we create a *new* Array, because we're about to mutate it.
		with from-stream Array this
			_.sort case sort-by
				defined?_
					\a b
						compare (sort-by a) (sort-by b)
				else
					compare
