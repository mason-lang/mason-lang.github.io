import
	..compare binary=?
	..Function Action identity Pred
	..js defined?
	..polys sub
	..to-string _ inspect
	..String indent
	..Type.Poly
	..Type.Pred-Type Any Opt
	..Type.Type => has-instance? type-of
import~
	..control opr
	.? Opt->?
	.Seq.Seq +>! ++>! first seq=? @tail~
	.Seq.Stream
	.Set.Set

@. trait
	| "Bag". Contains a variable number of elements. Most things implementing `iterator` should be @s.
	| If the iteration order of an @ is meaningful and `+ a b` is the concatenation, it is a Seq.
	| If an @ only stores a given element once, it is a Set.

	static
		(=>) \stream
			from-stream this stream

		(sub) \
			|| Allow @[Str] type syntax (does nothing)
			this

	(has-instance?) \em:Any
		| Whether one of the elements =? em.
		any? this \em-compare
			=? em em-compare

	(binary=?) \@other
		and (==? (type-of this) (type-of @other)) (seq=? this @other)

	(to-string) \
		do-inspect this to-string

	(inspect) \
		do-inspect this inspect

do-inspect = \_ recurse
	case
		empty? _
			"empty #(_.constructor.name)"
		else
			content =
				todo  @for:Array
				show-ems = => Array @for em of _
					. indent (recurse em)
				"\n\t. #(show-ems.join "\n\t. ")"
			"#(_.constructor.name)#content"

iterator. new Poly
	| Creates a new Generator which yields the values in the @.
	name.
	args. []
	impl-symbol. Symbol.iterator

empty?. poly \
	| Whether `count` is 0. Often much faster.
	(iterator this).next().done

region statics
	empty. poly \
		| Given a type, makes an instance which is `empty?`.
		| Should always return the same thing iff immutable.
		new this

	from-stream. poly \stream:@
		| Creates a new value of this type by reading out from an @'s iterator.
		with empty this
			++! _ stream

region Using iterator
	each!. !\_:@ do-for-each!:Action
		| A `for` loop in function form.
		| Prefer e.g. `each! @foo bar!` over the more verbose:
		|	for @foo
		|		bar!_
		| Also consider `each! @foo &bar` for instance methods.
		for elem of _
			do-for-each! elem

	fold. \_:@ b c
		| Keeps a state variable `acc` and keeps applying `folder acc em` for the elements, in order.
		| Returns the final value.
		| If empty?_, fails unless a `start` value for `acc` is provided. Otherwise `acc` starts as the first element.
		todo use array destructure instead
		{start folder rest} =
			cond (defined? c) {start. b folder. c rest. _} {start. first_ folder. b rest. @tail~_}
		acc = start
		for rest
			acc := folder acc _
		acc

	any?. \_:@ pred?:Opt[Pred]
		| Whether pred? is true for at least one element.
		pred? := opr pred? identity
		not empty? (?find _ pred?)

	all?. \_:@ pred?:Opt[Pred]
		| Whether pred? is true for every element.
		pred? := opr pred? identity
		empty? (?find _ \em
			not pred? em

	?find. \_ pred?:Pred
		| First element for which pred? is true.
		| (To find all, use `keep`.)
		todo SYNTAX for-else
		Opt->? for elem of _
			if pred? elem
				break elem

	count. poly \
		| Number of elements.
		fold this 0 &(+ _ 1)

region Lazy functions, and their eager versions.
	|| Eager versions are Polys if certain types can do them faster.

	@keep. poly \keep-if?:Pred
		| Only the elements that satisfy `keep-if?`.
		todo SYNTAX Shouldn't need => type-of_
		=> (type-of this) @for this
			if keep-if?_
				. _

	@keep~. \@filtered:@ keep-if?:Pred
		| Lazy @keep.
		todo SYNTAX @for~
		new Stream *!\
			for @filtered
				if keep-if?_
					yield _

	@toss. \@filtered:@ toss-if?:Pred
		| Opposite of `@keep`.
		| Only the elements that do not satisfy `toss-if?`.
		@keep @filtered &(not toss-if?_)

	@toss~. \@filtered:@ toss-if?:Pred
		| Lazy @toss.
		@keep~ @filtered &(not toss-if?_)

	todo Poly
	@map. \_:@ mapper:Function
		todo doc
		todo SYNTAX Shouldn't need => type-of_
		=> type-of_ @for elem of _
			. mapper elem

	@map~. \mapped:@ mapper:Function
		| Lazy map.
		todo SYNTAX @for~
		new Stream *!\
			for mapped
				yield mapper_

	todo  Better name?
	@flat-map. poly \mapper:Function[Any @]
		| "Like `map`, but each mapping produces multiple values."
		todo SYNTAX Shouldn't need => type-of_
		=> (type-of this) @for this
			... mapper_

	@flat-map~. \mapped:@ mapper:Function[Any @]
		| Lazy flat-map.
		todo SYNTAX @for~
		new Stream *!\
			for mapped
				yield* iterator mapper_

	@flatten. poly \
		| For an @ containing many @, produces an @ containing all of their entries combined.
		| This does *not* consider more than 1 nested level, and there *every* element of _ must be an @.
		| More efficient than `fold + _`.
		todo SYNTAX Shouldn't need => type-of_
		=> (type-of this) @for this
			... _

	@flatten~. \flattened
		| Lazy flatten.
		todo SYNTAX @for~
		new Stream *!\
			for flattened
				yield* iterator_

	++. poly \@other:@
		| Concatenation. Sets should override this.
		todo SYNTAX build type-of a
		=> (type-of this)
			... this
			... @other

	++~. \:Stream @a @b
		| Lazy ++.
		todo SYNTAX @for~
		new Stream *!\
			yield* iterator @a
			yield* iterator @b

	todo  Move to Set?
	--. poly \@remove:@
		| @ without any of the elements in `remove`.
		| Removes the *first* occurrence of each element.
		=> (type-of this) (--~ this @remove)

	--~. \:@ @removed-from @remove:@
		| Lazy --.
		todo SYNTAX @for~
		new Stream *!\
			@remove-remaining = => Set @remove
			for @removed-from
				case
					:@remove-remaining
						todo  -!
						--! @remove-remaining [_]
					else
						yield _

region Mutator methods
	empty!. poly \
		| Mutates this collection so that it will be `empty?`.
		abstract

	todo  implement
	+!. poly !\added
		todo doc
		+>! this added

	++!. poly !\@added:@
		| Adds new elements.
		| For Seqs these are added on the right; use `<++!` to add on the left.
		++>! this @added

	todo  implement
	-!. poly \@removed:@
		todo doc
		abstract

	--!. poly \@removed:@
		| Removes all elements in `removed` once.
		| For Seqs these are removed starting from the left.
		abstract
