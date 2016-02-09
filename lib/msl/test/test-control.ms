import
	msl.control do-times! opr build
	.tests

tests 'control
	do-times! -> !\
		i = 0
		do-times! 10 !\
			i := - i 1
		assert =? i -10

	opr ->
		[undefined 1] -> 1
		[1 2] -> 1

	build -> !\
		assert =? [0 1] (build \build!
			build! 0
			build! 1
