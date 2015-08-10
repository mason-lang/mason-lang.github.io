# syntax

Most character sequences are valid names, if they have no
special characters
(``() [] {} " # | : . ~ _ , ` ; , % ^ & \`` or any whitespace), do not start with a digit, and are not keywords.

Blocks of code are written as tab-indented blocks of text.

You don't need semicolons, commas, or curly braces.

`#` comments out the rest of a line.
`###` starts and ends a block comment.


# blocks

## objects

Objects are written as indented blocks of `key. value` pairs.

Click <i class='fa fa-refresh'></i> to see the output.

	x. 1
	y. 2

Object keys are also local variables.

	one. 1
	uno. one


## arrays

Arrays are also written in indented blocks.
Each line beginning with `. ` (remember the space) writes a new entry to it.

	. 1
	. 2


## map

Maps follow the same pattern.
Each line with a `->` writes an entry to the map.

	1 -> 2
	3 -> 4


## short forms

If you prefer to be curt...

	obj. (a. 1 b. 2)
	array. [ 1 2 ]


## value blocks

If a block is not an object, array, or map block, its value is the last line.
You don't need to explicitly `return`.

	dos = 2
	dos


## literals

There are the usual constants:

	. true
	. false
	. null
	. undefined

Number literals work as usual.

	. 0
	. 1.1
	. 1.1e3

Text surrounded in `"` makes a string.
Interpolate values with `{}`.

`\` escapes special characters -- `\t` for tab, `\n` for newline, and `\{` and `\\` for theirselves.

Multi-line strings go in indented text.

	use
		msl.math.methods +

	. "Single-line string?\nNope!"

	. "
		Let's interpolate with \{+ 1 1}.
		{+ 1 1}



# functions

Functions are written with a `|` followed by space-separated arguments.
The body of a function is a block.

	identity = |a
		a
	two-of = |a
		. a
		. a

	. identity 1
	. two-of 1
	# Parentheses are only needed when a subexpression is itself a function call.
	. identity (identity 1)

When you don't want to return a value from a function, use `!|`.

If you don't need to do anything in a block, just use `pass`.

A function with no arguments can be called like `fun()`.

	say-hi! = !|
		pass
	say-hi!()


## this-functions

Normal functions compile to JavaScript's arrow functions.

For `function() { }`, which has a new `this` variable, use `.|` and `.!|`.

In inner functions, it's safe to use `this`.

	f = .|
		|
			this
	(f.call 3)()


## new

Calling a constructor looks like a function call with `new` in front.

	new Array 8


# modules

Every file is a module with a default export and named exports.

A module is written like an object block.

The default export is an entry with the same name as the file name.

	# my-module.ms

	# default export
	my-module. 1

	# named export
	a. 2

If your module does not have any named exports, it is treated as a block and its value is assigned to the default export.

Therefore, the code for a module whose default export is zero is:

	0


Module imports go at the top of a script and use a special syntax.

	# This example won't run.
	use
		# Uses the global module `fs`.
		# Could be in node_modules or a registered RequireJS path.
		fs

		# File "brother.ms" (or ".js") in the same directory.
		.brother

		# ./brother-dir/nephew.ms
		.brother-dir.nephew

		# ../aunt.ms
		..aunt

		# ../../aunt/cousin.ms
		...aunt.cousin

		# Creates a local `a` equal to the module's default export.
		a

		# Imports named exports `b` and `c` as locals.
		a b c

		# Both combined. The default export is still called `a`, not `_`.
		a _ b c

	# Variables only used for tests should go here.
	use-debug
		msl.assert assert-call!


# cli

You can continue to use the web interface, but it's time to learn to use the cli.

To test that it's working, and to see modules really in action, try this in a console:

* `sudo npm install -g https://github.com/andy-hanson/mason-cli`
* `sudo npm install -g amdefine` (We're working on not requiring this.)
* `mkdir test; cd test`
* `echo 1 > one.ms`
* `echo -e "use\n\t.one\nconsole.log one" > main.ms`
* `mason run main.ms`
