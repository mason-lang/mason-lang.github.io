import
	..tests

tests 'operators
	&+ ->
		[1 2 3] -> 6

	&- ->
		[5 4 3] -> -2

	&* ->
		[2 3 4] -> 24

	&/ ->
		[6 3 2] -> 1

	&% ->
		[10 6 3] -> 1

	&** ->
		[2 3 2] -> 64

	&=? ->
		[1 1 1] -> true
		[1 1 2] -> false

	&==? ->
		x = []
		[x x] -> true
		[x []] -> false

	&<? ->
		[1 2 3] -> true
		[1 2 2] -> false

	&<=? ->
		[1 2 2] -> true
		[1 2 1] -> false

	&>? ->
		[3 2 1] -> true
		[3 2 2] -> false

	&>=? ->
		[3 2 2] -> true
		[3 2 3] -> false

	&and ->
		[true true true] -> true
		[true true false] -> false

	&or ->
		[false false false] -> false
		[false false true] -> true

	|| Not implemented by a function (compile to `_ => !_`),
	|| but test them here anyway.
	&not ->
		[false] -> true
		[true] -> false

	&neg ->
		[1] -> -1
