import
	msl.Promise $fail-after-time $delay $keep
	msl.io.time $sleep
	msl.Try $try
	.tests

tests 'Promise
	$fail-after-time -> $!\
		$x = ($sleep 100).then \
			1
		a = $ $try ($fail-after-time $x 1)
		assert =? a.message "Took longer than 1 milliseconds."
		assert =? 1 $ $fail-after-time $x 200

	$delay -> $!\
		assert =? 1 $ $delay \
			1

	$keep -> $!\
		assert =? [2 4] $ $keep [1 2 3 4] \_
			$delay \
				divisible? _ 2
