import
	...Generator
	..@ empty from-stream iterator
	.Seq

Stream. class trait Seq
	| A Stream is a @ whose elements are the outputs of a Generator.
	| Unlike a Generator, a Stream can be used multiple times.
	static
		(empty) \
			new Stream *!\
				pass

		(from-stream) \_
			new this \
				iterator_

	construct make-iterator:Function[Generator]
		Object.defineProperty this Symbol.iterator
			value. make-iterator
