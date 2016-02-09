import
	global WeakMap
	.@.@ empty?
	.js defined? js-bar
	.math.Number Int
	.Type.Poly _ impl!

->int. &(js-bar 0 _)

hash-code. new Poly
	| Integer used to identify a value in a Hash-Map (or Hash-Set).
	| This should have a high probability of being different than the hash-codes of the other values in the map.
	name.
	args. []
	returns. Int
	allow-null?. true
	default. .\
		switch this
			null
				108
			undefined
				109
			else
				|| Overriden for primitives, so safe to use WeakMap here.
				cached = hashes-cache.get this
				cond (defined? cached) cached
					|| Don't recurse infinitely.
					hashes-cache.set this 17
					hash = 17
					for key of Object.keys this
						val = .(key)
						val-hash = hash-code val
						hash := ->int * hash 23
						hash := ->int + hash val-hash
					hashes-cache.set this hash
					hash

hashes-cache = new WeakMap

region Since default hash-code only works on Objects, let's implement hash-code for primitives.
	impl! hash-code Boolean .\
		cond this 1 0

	impl! hash-code Function .\
		todo There must be something better than this.
		hash-code case .name
			empty?_
				.toString()
			else
				_

	todo Memoize this one too?
	impl! hash-code String .\
		hash = 13
		i = .length
		for
			hash := ->int + hash (.charCodeAt i)
			hash := ->int * hash 31

			if =? i 0
				break
			i := - i 1
		hash

	impl! hash-code Symbol \
		todo ES6 (currently this returns undefined)
		todo Symbol.keyFor _
		42

	todo  This treats small floats as equivalent.
	impl! hash-code Number .\
		->int this
