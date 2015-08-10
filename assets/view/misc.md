# with

`with` lets you create an empty object and build it up by modifying it.
It assigns to the focus, or to a new local.

	. with [ ]
		_.push 1
		_.push 2
	. with new Object as o
		o.x = 1
		o.y = 2

# sub

`sub` is a method with special syntax.
This is good for `Map` lookups, `@` lookups by index, and for partially applying functions

	use
		msl.@.Map.Map assoc!
		msl.compare =?
		msl.math.methods +
	map =
		1 -> 1
	. map[1]

	# This calls `sub` with 2 arguments.
	set-one! = assoc![map 1]
	set-one! 2
	. map[1]

	# This calls `sub` with 1 argument.
	+2 = +[(+ 1 1)]
	. +2 1

Note that you can't use `[ ]` to dynamically grab a property from an object.
For that, use `p`/`?p` and `send`.



# lazy

Sometimes you don't know whether a value will actually be used.

Use `~` before a local or expression to declare it to be lazy.

A Lazy will only be evaluated at most once -- the result is cached.


	show-amount = |number name
		~plural =
			global.console.log "Calculating plural for {name}"
			"{name}s"
		switch number
			0
				"Yes, we have no {plural}."
			1
				"One more {name}."
			else
				"Plenty of {plural}."

	. show-amount 2 "grape"
	. show-amount 1 "melon"
	. show-amount 0 "banana"


Functions can be declared to accept lazy arguments.
Prefix an expression with `~` (or wrap it in `~( )`) to pass it lazily.

	# Mason's `and` expression could be implemented with a lazy function.
	my-and = |cond-1 ~cond-2
		case
			cond-1
				cond-2
			else
				false

	. my-and true true

	. my-and true ~
		global.console.log "This will be called."
		false

	. my-and false ~
		global.console.log "Never called."
		true


# region

`region` visually groups your code.
The code of the region goes in an indented block, but does *not* introduce a new program block.

	use
		msl.math.methods *

	region Nums
		one. 1
		two. 2

	region Funs
		double. |_
			# `two` is in the same scope as `double`.
			* _ 2

	region Calculated Nums
		four. double two

