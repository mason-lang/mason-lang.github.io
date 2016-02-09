import
	msl.Function thunk
	msl.Try annotate-errors $annotate-errors fails? fails-with? Success $try try-result
	.tests

tests 'Try
	try-result -> \
		[(thunk 1)] -> new Success 1
		res = try-result !\
			throw
		assert =? res.message "An error occurred."

	fails? -> !\
		assert fails? !\
			throw
		forbid fails? !\
			pass

	fails-with? -> !\
		assert fails-with? 'message !\
			throw 'message
		assert fails-with? TypeError \
			null.missing-property

	annotate-errors -> !\
		assert fails-with? 'ab !\
			annotate-errors 'a !\
				throw 'b

	$try -> $!\
		assert =? (new Success 1) $ $try (Promise.resolve 1)
		assert =? 'a $ $try (Promise.reject 'a)
		|| $.reject but with non-error:
		assert =? 'a $ $try (Promise.reject 'a)

	$annotate-errors -> $!\
		assert =? 'ab ($ $try ($annotate-errors 'a (Promise.reject new Error 'b))).message
