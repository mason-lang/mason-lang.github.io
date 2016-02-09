import
	...math.Number Nat
	..@ count empty empty? from-stream iterator
	.Seq _ ?nth
	.Stream

Lazy-Stream. class trait Seq
	| Like Stream, but caches its elements as it produces them.
	| If you want to stream the results of an expensive computation and use it multiple times, use this.
	| If you have a cheap computation or only need to iterate through it once, use Stream.
	static
		(empty) \
			new this *!\
				pass

		(from-stream) \_
			new this \
				iterator_

	construct stream:Function
		todo stream:Function[Generator]
		.cache := []
		todo ES6
		todo We wrap this in a Stream because `for` calls [Symbol.iterator]().
		todo We should be able to do `for` on both @s and unwrapped iterators.
		strm = new Stream stream
		todo  `this` in constructor
		self = this
		todo iterator @for~
		get-caching-iterator = *!\
			for strm
				todo  +>!
				self.cache.push _
				yield _
		.caching-iterator := get-caching-iterator()

	(iterator) *!\
		yield* iterator .cache
		yield* .caching-iterator

	(?nth) \n:Nat
		todo higher-order function for this pattern
		case ?nth .cache n
			empty?_
				n-left = - n (count .cache)
				?nth (Stream .caching-iterator) n-left
			else
				_
