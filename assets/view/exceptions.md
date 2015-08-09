# throw!

You can throw errors as in JavaScript.
If you throw a String, it will be converted to an Error for you.

	use
		mason.Try try-result

	. try-result !|
		throw! "Bad stuff"
	# Same as:
	. try-result !|
		throw! new Error "Bad stuff"


# assert! / forbid!

Usually you'll only throw an exception conditionally, so there's syntax for that.
When asserting the result of a function call, the error message will include the function called and its arguments.
You can also throw your own custom error.

	use
		mason.compare =?
		mason.Try try-result

	. try-result !|
		assert! false
	. try-result !|
		assert! =? 0 1
	. try-result !|
		forbid! true throw! "Bad stuff"


# except

You can save yourself from an exception with `except`.

	. 0
	except!
		try!
			throw!
		catch!
			. 1
		finally!
			. 2

There's also a value version.

	except
		try
			throw!
			0
		catch
			1
		finally!
			pass
