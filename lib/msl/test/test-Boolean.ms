import
	msl.Boolean implies xor
	.tests

tests 'Boolean
	implies ->
		[false false] -> true
		[false true] -> true
		[true false] -> false
		[true true] -> true

	xor ->
		[false false] -> false
		[false true] -> true
		[true false] -> true
		[true true] -> false
