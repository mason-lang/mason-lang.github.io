import
	...Function Pred
	...polys sub
	...String indent
	...Type.Type => type-of
	..@ _ ++ count empty empty? from-stream iterator
import~
	...math.Number Nat
	...to-string
	..? Opt->? un-?
	.Stream

Seq. trait @
	| @ whose values are in a meaningful order.
	(sub) \n:Nat
		| Nth value in iteration order.
		un-? (?nth this n) ~"
			No element at index #n for
				#(indent (to-string this))

region TODO
	todo  Review name...
	<++~. poly \left-added:@
		| (There is no `++>~` because `++~` by default adds to the right for Seqs.)
		todo more doc
		=> (type-of this) (++ left-added this)

region Very first and last
	first. \_
		| First value in iteration order.
		un-? ?first_ "Can not take first of empty."

	?first. poly \
		| First value in iteration order, if non-empty.
		?nth this 0

	last. \_
		| Last value in iteration order.
		un-? ?last_ "Can not take last of empty."

	?last. poly \
		| Last value in iteration order, if non-empty.
		unless empty? this
			this[- (count this) 1]

	@tail. poly \
		| All elements but the first.
		todo Eager for Linked-Lists.
		cond (empty? this) this (@drop this 1)

	@tail~. &(@drop~ _ 1)

	@rtail. poly \
		| All elements but the last.
		todo Eager for finger trees.
		cond (empty? this) this
			@take this - (count this) 1

region Search
	seq=?. \@a:@ @b:@
		| Whether two @s share the same elements in the same order.
		| The types of the @s do not matter.
		| Equivalent to `=? (=> Array @a) (=> Array @b)`, but may not have to fully unlazy both.
		iter-a = iterator @a
		iter-b = iterator @b
		for
			next-a = iter-a.next()
			next-b = iter-b.next()
			if or next-a.done next-b.done
				break =? next-a.done next-b.done
			unless =? next-a.value next-b.value
				break false

	?nth. poly \n:Nat
		| `n`th element in iteration order, if there are at least that many values.
		| 0th is the first.
		i = 0
		todo SYNTAX for-else
		Opt->? for this
			if =? i n
				break _
			i := + 1 i

region Update
	@slice. poly \start:Nat end:Nat
		| The elements from index start (inclusive) to end (exclusive).
		| Takes as much as possible.
		| Result length should be - end start, unless `end` was past the end.
		=> (type-of this) (@slice~ this start end)

	@slice~. \:@ _ start end
		| Lazy `@slice`.
		@take~ (@drop~ _ start) - end start

	@take. poly \count-to-take:Nat
		todo doc
		=> (type-of this) (@take~ this count-to-take)

	@take~. \_ count-to-take:Nat
		| Stream including only the first count-to-take elements.
		todo SYNTAX @for~
		case
			=? 0 count-to-take
				empty Stream
			else
				todo SYNTAX @for~
				new Stream *!\
					n = count-to-take
					for elem of _
						yield elem
						n := - n 1
						if =? 0 n
							break

	todo eager version
	@take-while~. \_ while?:Pred
		| Stream stopping (and not including) the first element not satisfying while?.
		todo SYNTAX @for~
		new Stream *!\
			for elem of _
				unless while? elem
					break
				yield elem

	@drop. poly \count-to-drop:Nat
		todo toc
		=> (type-of this) (@drop~ this count-to-drop)

	@drop~.
		| Stream without the first count-to-drop elements.
		\_ count-to-drop
			todo SYNTAX @for~
			new Stream *!\
				iter = iterator_
				i = 0
				for
					if =? i count-to-drop
						break
					if iter.next().done
						break
					i := + 1 i
				yield* iter

	todo  @drop-while~

region Combination
	@zip. \@a:@ @b:@ zipper:Function[2]
		| Type-preserving zip~.
		todo doc the other way around (primarily on zip, short on zip~)
		=> (type-of @a) (@zip~ @a @b zipper)

	@zip~. \@a:@ @b:@ zipper:Function[2]
		| Seq of zipper applied to corresponding elements of @a and @b.
		| Ends as soon as either of them does, discarding extra elements.
		| (Corresponding means: with the same index.)
		todo SYNTAX @for~
		new Stream *!\
			iter-a = iterator @a
			iter-b = iterator @b
			for
				next-a = iter-a.next()
				if next-a.done
					break
				next-b = iter-b.next()
				if next-b.done
					break
				yield zipper next-a.value next-b.value

region TODO: put somewhere
	@groups-of~. \group-size:Nat _ todo  :Seq[Array]
		| Seq of consecutive groups of `group-size` elements.
		case
			=? group-size 0
				todo  repeat-forever []
				new Stream *!\
					for
						yield []
			else
				todo SYNTAX @for~
				new Stream *!\
					iter = iterator_
					for
						next-group = []
						for
							{value done} = iter.next()
							if done
								break
							++>! next-group [value]
							if =? group-size (count next-group)
								break
						unless =? group-size (count next-group)
							break
						yield next-group

	@indexes. \_:Seq
		todo doc
		0...count_

	@reverse. poly \
		| Seq with the opposite order.
		(from-stream Array this).reverse()

	@reverse~. poly \
		arr = => Array this
		todo SYNTAX @for~
		new Stream *!\
			for @reverse (@indexes arr)
				yield arr[_]

	@split~. \_ split?:Pred
		| Subseqs separated by elements where split? is true.
		todo  Allocate current group; don't wait to call slice.
		todo SYNTAX @for~
		new Stream *!\
			iter = iterator_
			prev-idx = 0
			cur-idx = 0
			for
				{value done} = iter.next()
				~next-idx = + 1 cur-idx
				case
					done
						yield @slice _ prev-idx cur-idx
						break
					split? value
						yield @slice _ prev-idx cur-idx
						prev-idx := next-idx
						cur-idx := next-idx
					else
						cur-idx := next-idx

region Mutator methods
	todo Implement
	<+!. poly !\added
		todo doc
		abstract

	<++!. poly !\@added:@
		| Makes `_` into `+ added _`.
		for @reverse~ @added
			<+! this _

	todo Implement
	+>!. poly !\added
		todo doc
		abstract

	++>!. poly !\@added:@
		| Makes `_` into `+ _ added`.
		for @added
			+>! this _

	?<pop!. poly \
		| Takes one element off the left side, if not empty?.
		abstract

	?pop>!. poly \
		| Takes one element off the right side, if not empty?.
		abstract
