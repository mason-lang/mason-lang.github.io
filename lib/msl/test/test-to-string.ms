import
	.tests

tests 'to-string
	to-string ->
		[null] -> 'null
		[undefined] -> 'undefined
		[(Object.create null)] -> "<object with no prototype>"

	inspect ->
		[{a. 1 b. 2}] -> "
			Object
				a. 1
				b. 2
		todo test non-enumerable properties
