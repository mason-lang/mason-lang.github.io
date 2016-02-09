import
	msl.@.Seq.Lazy-Stream
	msl.control build
	...tests

tests 'Lazy-Stream
	Lazy-Stream -> !\
		fibonaccis = new Lazy-Stream *!\
			yield 1
			yield 1
			for 2...
				|| This is *not* an exponential blowup because these are cached.
				yield + fibonaccis[- _ 1] fibonaccis[- _ 2]
		assert seq=? (@take~ fibonaccis 10) [1 1 2 3 5 8 13 21 34 55]

	iterator -> !\
		assert =? [1 2] (build !\build!
			_ = new Lazy-Stream *!\
				build! 1
				yield 1
				build! 2
				yield 2
				build! 3
			assert seq=? [1] (@take~ _ 1)
			assert seq=? [1 2] (@take~ _ 2)
