import
	...compare binary=?
	...polys sub
	...to-string _ inspect
	...Type.Type => type-of
	..@ _ all? count empty empty? from-stream @map~
	..? ?-or un-?
import~
	.Id-Map

Map. trait @
	| Mapping from keys to values.

	static
		(empty) \
			new Id-Map

		(from-stream) \stream
			map = empty this
			for stream
				todo SYNTAX Array destructure
				map[_[0]] := _[1]
			map

	(to-string) \
		inspect this

	(inspect) \
		cond (empty? this) "empty #(.constructor.name)"
			todo map Map to Array
			todo SYNTAX Array destructure
			todo @for~
			parts = @map~ this \pair
				"#(inspect pair[0]) -> #(inspect pair[1])"
			"
				#(.constructor.name)
					#(=> String parts "\n\t")

	(binary=?) \other
		and (=? (type-of this) (type-of other)) (map=? this other)

	(sub) \key
		un-? (?get this key) ~"#this does not contain #key."

region New methods
	?get. poly \key
		| `?` containing the value corresponding to `key`, if any.
		abstract

	has-key?. poly \key
		| Whether the key is in the Map.
		not empty? (?get this key)

	@keys. poly \
		| Every key that the Map `has-key?`.
		todo @for:Array
		=> Array (@map~ this \pair
			pair[0]

	@values. poly \
		| Every value in the Map.
		todo @for:Array
		=> Array (@map~ this \pair
			pair[1]

region Functions
	make-map. \@key:@ get-value:Function
		| Creates a Map whose values are the result of applying `get-value` to each key.
		todo map-type param
		map = empty Id-Map
		for @key
			map[_] := get-value_
		map

	map=?. \a:Map b:Map
		| Whether the two maps have the same keys and the same associated values, regardless of the maps' types.
		and (=? (count a) (count b))
			all? a \pair
				todo SYNTAX Array destructure
				key = pair[0]
				val = pair[1]
				?bk = ?get b key
				and (not empty? ?bk) =? val ?bk.val

region Mutator methods
	get-or-add!. poly \key ~default-val
		| map[key], and if it's not already there, fill it in with default-val.
		?-or (?get this key) ~
			this[key] := default-val
			default-val
