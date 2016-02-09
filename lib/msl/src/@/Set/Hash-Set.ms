import
	..@ ++! --! empty empty! iterator
	..Map.Map @keys
	..Map.Hash-Map
	.Set

Hash-Set. class trait Set
	| Set that considers elements equal using =?.
	| Relies on an efficient hash-code implementation.

	static
		(empty) \
			new this (empty Hash-Map)

	construct .map:Hash-Map
		pass

	(iterator) \
		iterator (@keys .map)


	todo Make default falling back to +!
	(++!) !\@added
		for @added
			.map[_] := true

	todo Make default falling back to -!
	(--!) !\@deleted
		for @deleted
			del .map[_]

	(empty!) !\
		empty! .map
