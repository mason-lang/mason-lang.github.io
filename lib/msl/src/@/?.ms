import
	..control opr
	..Error ->Error
	..js defined?
	..private.bootstrap msDef
	..to-string _ inspect
	..Type.Poly self-impl!
	..Type.Type extract
	.@ empty empty? from-stream iterator
	.Seq.Seq

|| I've measured and code is at least twice as fast when using a single option type
|| rather than a ?, ?Some, ?None type heirarchy.

?. class trait Seq
	| A Seq with 0 or 1 elements.
	todo MORE

	static
		(empty) \
			?None

		(from-stream) \_
			iter = iterator_
			{value done} = iter.next()
			cond done ?None (?some value)

	construct .val
		pass

	(empty?) \
		==? this ?None

	(iterator) *!\
		unless empty? this
			yield .val

	(to-string) \
		inspect this

	(inspect) \
		case
			empty? this
				'?None
			else
				"?some #(inspect .val)"

empty-marker =
	| `_.val` on an empty `?` will return this.
	{}

?None. new ? empty-marker
?some. \_
	new ? _

self-impl! extract ?some \_ num-extracteds
	?->nullable if and (=? 1 num-extracteds) :? not empty?_
		[_.val]

msDef 'some ?some
msDef 'None ?None

region Functions
	Opt->?. \_
		| `?` containing the value iff it is defined.
		todo  `if-test defined? _` ?
		if defined?_ _

	?->Opt. \_:?
		| Extracts the value from a `?`, or returns undefined.
		cond empty?_ undefined _.val

	?->nullable. \_:?
		cond empty?_ null _.val

	todo Just use first?
	un-?. \_:? ~fail-message
		| Tries to extract the value out of a `?`. Throws an error if it is empty.
		forbid empty?_ throw ->Error (opr fail-message "Tried to force empty `?`.")
		_.val

	?-or. \_:? ~or-else
		| If empty, defaults to `or` - else returns its value.
		cond empty?_ or-else _.val

	?-cond. \_:? ~if-none if-some:Function
		| Shorthand for case on option.
		| If ?None, returns `if-none`.
		| If `?some foo`, returns `if-some foo`.
		cond empty?_ if-none (if-some _.val)
