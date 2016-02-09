import
	todo SYNTAX use global.Map but rename it to Js-Map
	global
	...polys del-sub! set-sub!
	..@ count empty!
	..? Opt->?
	..Seq.Stream
	.Map _ ?get has-key? @keys @values

Id-Map.
	| JavaScript's native Map type.
	| Only considers exactly identical keys =?; this makes it the fastest Map.
	global.Map

trait! Id-Map Map
	(set-sub!) !\key val
		.set key val

	(count) \
		.size

	(?get) \key
		Opt->? (.get key)

	(has-key?) \key
		.has key

	(@keys) \
		new Stream \
			.keys()

	(@values) \
		new Stream \
			.values()

	(empty!) !\
		.clear()

	(del-sub!) \key
		with ?get this key
			.delete key
