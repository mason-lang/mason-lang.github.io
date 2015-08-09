
# if / unless

`if` and `unless` allow you to conditionally execute code.

	. if true
		0
	. if false
		1
	. unless true
		2
	. unless false
		3

These return `?` values. If you don't want to return a value, use `if!` and `unless!`

	. 0
	if! true
		. 1
	unless! false
		. 2

When `if` appears in the middle of a line, you don't need parentheses -- the rest of the line automatically gets grouped with the `if`. Most keywords work this way.

	use
		mason.@.? un-?
	un-? if true
		0


# switch

`switch` efficiently branches based on a value.
Unlike with JavaScript, you don't need `break`. Fallthrough is not supported.

	f = |_
		switch _
			0
				"zero"
			else
				"some other number"
	. f 0
	. f 1

If there is no `else`, an error will be thrown for an unhandled case.
`switch!` acts the same but does not have a value.

# case

`case` allows any expression as a test. Tests are tried from top to bottom until one matches.

	use
		mason.compare <?

	rate-guess = |a
		case
			<? a 7
				"Too low!"
			<? 7 a
				"Too high!"
			else
				"You got it!"

	. rate-guess 6
	. rate-guess 8
	. rate-guess 7

An expression written after `case` on the same line will become the focus.

Or, when a Fun has only one argument and its body is a `case`, just use `|case`.

	use
		mason.compare =?
		mason.math.methods -

	rate-guess = |a
		case a
			=? _ 7
				"You got it!"
			else
				"Off by {- _ 7}"

	. rate-guess 1337

	rate-guess-2 = |case
		=? _ 7
			"You got it!"

	. rate-guess-2 7

`case!` is the statement version.

# logic

All these conditionals are easier with some boolean helpers.

	. not false
	. and true true
	. or true false
	# nand and nor are simply:
	. not and true false
	. not or false false
