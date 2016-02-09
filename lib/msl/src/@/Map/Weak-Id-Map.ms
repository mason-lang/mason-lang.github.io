import
	global WeakMap
	...polys del-sub! set-sub!
	..@ empty!
	..? Opt->?
	.Map _ ?get has-key? @keys

Weak-Id-Map.
	| Map which can only hold have Objects as keys and stops holding them when they are garbage collected.
	| Good for caches.
	| It does not have the full functionality of a Map because there is no way to iterate over the keys.
	WeakMap

trait! Weak-Id-Map Map
	(?get) \key
		Opt->? (.get key)

	(has-key?) \key
		.has key

	(set-sub!) !\key val
		.set key val

	(del-sub!) \key
		with ?get this key
			.delete key

	todo  unsupported! Function?
	(@keys) !\
		throw "Weak-Id-Map does not support `keys`."

	(empty!) !\
		throw "Weak-Id-Map does not support `empty!`."
