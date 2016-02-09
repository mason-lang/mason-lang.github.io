import
	msl.String indent
	.tests

tests 'String
	indent ->
		s = "
			a
			b
		s-indented = "
			a
				b
		[s] -> s-indented
		['a] -> 'a
