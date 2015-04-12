Mason (rhymes with 'JSON') is a subset of JavaScript with nifty syntax for declarative data.

# Syntax

Most character sequences are valid names, if they have no
<span class='tooltip' title='( ) [ ] { } " # | : . ~ _ , ` ; , % ^ & \'>
special characters
</span>, do not start with a digit, and are not keywords.

Blocks of code are written as indented blocks of text, as in Python.

You don't need semicolons, commas, or curly braces.

Closing parentheses are optional where the end of a line will suffice.

`#` comments out the rest of a line.


# Blocks

## Obj

An `Obj` is a collection of values given names.
They are written in indented blocks.

Click <i class='fa fa-refresh'></i> to see the output.

	my-obj.
		one. 1
		two. 2
	copy-of-my-obj.
		one. my-obj.one
		two. my-obj.two

Note that `obj.property` accesses a property while `property. value` defines one.


## Array

Arrays are also written in indented blocks.
Each line beginning with `. ` (remember the space) writes a new entry to it.

	. 1
	. 2


## Map

Maps follow the same pattern.

	1 -> 2
	3 -> 4


## Short forms

If you prefer to be curt...

	obj. (a. 1 b. 2
	array. [ 1 2 ]


## Locals

All of these blocks you've seen are also blocks of code,
meaning you can do computations alongside declaring data.

Use `=` to create a new local variable.

	. 1
	two = 2
	. two

Locals are local to the block they're declared in.
Code can access locals in its own block or in any containing block.

This means that code "down and to the right" of a local can access it.

	.
		a = 1
		. a # OK
		.
			a # OK
	.
		a # Not OK

Obj keys are also local varables.

	one. 1
	other-one. one


## Value blocks

If a block is not an Obj, Array, or Map block, its value is the last line.

	two =
		too = 2
		too
	two


# Funs

Each of these block types can be used as the body of a `Fun` (function).
Funs are called by listing their arguments separated by spaces.

	identity = |a
		a
	two-of = |a
		. a
		. a
	single-entry-map = |a b
		a -> b
	pair-of = |a b
		first. a
		second. b

	. identity 1
	. two-of 1
	. single-entry-map 1 2
	. pair-of 1 2
	# Use parentheses to call a Fun on the result of another one.
	. identity (identity 1

A Fun with no arguments can be called like `fun()`.


# Focus

`_` is a special variable called the "focus".
You can think of it as the "it" variable - the current value you're dealing with.

You can assign to it as in `_ = 1`, or make it a Fun's argument with `|_`.

`fun_` is equivalent to `(fun _)`.

	use
		mason.math.methods * +

	twice = |_
		* _ 2
	half = |_
		* _ 0.5
	two-and-a-half-of = |_
		+ twice_ half_

	_ = 2
	. two-and-a-half-of_


# Case

`case` is Mason's only way to branch.

The tests are tried from top to bottom until one is true,
then the block associated with that one is run and its value returned.

The `else` block runs when no other test worked.
If none is provided, it will throw an `Error`.

	use
		mason.compare =?

	rate-guess = |a
		case
			=? a 7
				"You got it!"
			else
				"Nope."

	. rate-guess 6
	. rate-guess 7


An expression written after `case` on the same line will become the focus.

Or, when a Fun has only one argument and its body is a `case`, just use `|case`.

	use
		mason.compare =?
		mason.math.methods -
		mason.math.Num

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

There is also `case!`, which is like `case` but does not return a value.


# Str

Text surrounded by `"` makes a `Str` (string).

Interpolate values with `{}`.
This calls `show` on the value before adding it to the string.

`\` escapes special characters -- `\t` for tab, `\n` for newline, and `\{` and `\\` for theirselves.

Multi-line strings go in indented text.

	use
		mason.math.methods +

	. "Single-line string?\nNope!"

	. "
		Let's interpolate with \{+ 1 1}.
		{+ 1 1}


# Debug

## In/Out

You can make assertions before and after a Fun runs using `in` and `out`.

The compiler checks that any locals used only in debug must be marked as debug-only,
using `use-debug` and `debug`.

	use
		mason.math.methods /
	use-debug
		mason.!
		mason.compare =?
		mason.math.methods *
		mason.math.Num divisible?

	# Compiler will issue a warning if debug-only function is not marked `debug`.
	debug even? = |_
		divisible? _ 2

	half = |_
		in
			! even? _
		out
			! =? (* res 2) _

		# `debug` can take a block instead of a single line.
		debug
			! =? 1 1
			! =? 2 2

		# If you had breakpoints turned on, this would be one.
		debugger

		/ _ 2

	half 2
	# Try uncommenting this.
	# half 3

Any property whose name ends in `test` will also be considered debug-only.

Since debug code can be turned off, it's important to use it only for assertions.


# Region

Regions group your code. The code of the region goes in an indented block,
but does *not* introduce a new program block.

	use
		mason.math.methods *

	region Nums
		one. 1
		two. 2

	region Funs
		double. |_
			# `two` is in the same scope as `double`.
			* _ 2

	region Calculated Nums
		four. double two


# Lazy

Sometimes you don't know whether a value will actually be used.

Use `~` before a local or expression to declare it to be lazy.

A Lazy will only be evaluated at most once -- the result is cached.

A Fun can be declared to accept Lazys.

	use
		mason.compare <?

	between? = |n low high
		~<high? = <? n high
		case
			<? low n
				<high?
			else
				false

	# Lazys let us refactor conditional evaluation!

	and = |a ~b
		case
			a
				# This causes `b` to be evaluated.
				b
			else
				# Don't bother to evaluate `b`.
				false

	between-2? = |n low high
		~<high? = <? n high
		# <high? Needs to be marked as lazy again when passed lazily into a function.
		and (<? low n) ~<high?
		# Or we could just do: `and (<? low n) ~(<? n high

	. between? 2 1 3
	. between-2? 20 1 3


# Module

Every file is a module.

Write it like an Obj and each Obj key will become an export.
Also, the last line will be the default export.

Mason's syntax for module imports resembles Python's.

	# This example won't run since these modules don't exist.
	use
		# Uses the "global" module `fs`.
		# Could be in node_modules or a registered RequireJS path.
		fs

		# File "brother.ms" (or ".js") in the same directory.
		.brother

		#
		.brother.nephew

		# ../aunt.ms
		..aunt

		# ../../aunt/cousin.ms
		...aunt.cousin

		# A module name alone will be the default export if available,
		# or else the module value (module.exports or RequireJS return value).
		a

		# Extracts exports `b` and `c` from the `a` module.
		a b c

		# Extracts the default export too.
		a _ b c

	# Export 1 as `x`
	x. 1

	# Default export of 2
	2


# Miscellany

## Sub

Like `contains?`, `sub` has special syntax: `a[b]`.
This is good for `Map` lookups, `@` lookups by index, and for `curry`.

	use
		mason.!
		mason.compare =?
		mason.methods sub
		mason.math.methods +
	map =
		1 -> 2
		3 -> 4
	. map[1]
	. sub map 1
	# This does *not* call `=? 3`, they are passed separately.
	must-be-three = ![=? 3]
	must-be-three 3
	# To call function inside, must use parentheses.
	add-two = +[(+ 1 1)]
	. add-two 2


Like with parentheses, the closing `]` can be omitted.

## Obj extraction

Often you need to get more than one value out of an Obj.

	my-obj = (one. 1 two. 2
	one two = my-obj
	. one
	. two


# More

That's not all! Check out the other tabs up top!
