import
	.tests

tests 'js
	defined? ->
		[undefined] -> false
		[null] -> true
		[0] -> true

	null? ->
		[undefined] -> false
		[null] -> true
		[0] -> false

	exists? ->
		[undefined] -> false
		[null] -> false
		[0] -> true
