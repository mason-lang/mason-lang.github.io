# throw!

You can throw errors as in JavaScript.

If you throw a String, it will be converted to an Error for you.

	use
		msl.Try try-result

	try-result !|
		throw! "Bad stuff"


# assert! / forbid!

Usually, you'll only need to throw an exception under certain conditions.


	use
		msl.compare =?
		msl.Try try-result

	. try-result !|
		assert! false
	. try-result !|
		assert! =? 0 1
	# Use `throw!` to specify the particular error thrown by the assertion.
	. try-result !|
		forbid! true throw! "Bad stuff"

When asserting the result of a function call, the error message will include the function called and its arguments.



# except

You can save yourself from an exception with `except`.

	except
		try
			throw!
		catch
			1
		finally!
			pass

There's also a statement version. Note that `try` changes to `try!`.

	. 0
	except!
		try!
			throw!
		catch!
			. 1
		finally!
			. 2

`catch` can take a parameter.

	except
		try
			throw!
		catch
			_
