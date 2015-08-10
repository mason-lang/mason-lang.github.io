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

These are statements, not expressions. Since they don't have a value, they can appear as lines in blocks, but never inside other expressions. (No `x = if! ...`)

When `if` appears in the middle of a line, you don't need parentheses -- the rest of the line automatically gets grouped with the `if`. Most keywords work this way.

	use
		mason.@.? un-?

	# un-? has *1* argument: the `if` expression.
	un-? if true
		0



# switch

`switch` efficiently branches based on a value.
Unlike with JavaScript, you don't need `break`. Fallthrough is not supported.

	f = |number
		switch number
			0
				"zero"
			else
				"some other number"
	. f 0
	. f 1

If there is no `else`, an error will be thrown for an unhandled case.
(If you want to do nothing, just write `pass` in the `else` block.)

`switch!` is the statement version.



# focus

The focus, `_`, pronounced "it" when reading code, is a good short-lived variable when you don't need a name.

Several expressions in Mason implicitly assign the focus.
You can also assign to it explicitly like any other variable.

`fun_` is syntax for `(fun _)`.

	use
		mason.math.methods * +

	twice = |_
		* _ 2
	half = |_
		* _ 0.5
	two-and-a-half-of = |_
		+ twice_ half_

	_ = 2
	two-and-a-half-of_



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

The syntax is similar to function calls, but without the need for parentheses because the keywords automatically group with the rest of the line, just like `if`, `unless`, `switch`, `case`, and others.
