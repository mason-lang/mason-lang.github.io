import
	...tests

tests 'Stream
	Stream -> !\
		_ = new Stream *!\
			yield 1
			yield 2
		assert seq=? _ [1 2]
		|| Streams can be used twice!
		assert seq=? _ [1 2]
