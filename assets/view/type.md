A `Type` is something that `contains?` a certain set of values.

When declaring a local, including in function arguments, use `:` to assert a value's type. This calls `contains?` and asserts that the result is `true`.

For function return types, write the type right after the `|`.

	use
		msl.Try try-result

	number-to-string = |:String _:Number
		"{_}"

	. number-to-string 1
	. try-result !|
		number-to-string [ ]

You can also use `value:Type` (with no spaces) anywhere else to test a value's type.

If the name is missing, the test is on the focus.

	. 1:Number
	. 1:String
	_ = "one"
	. :Number
	. :String



# types of types

## Pred-Type

You can make any predicate into a Type.

	use
		msl.compare =?
		msl.Type.Pred-Type

	Three = new Pred-Type
		predicate. =?[3]

	. 3:Three
	. 4:Three


## Impl-Type

An `Impl-Type` is a type with an associated prototype. Most types are Impl-Types.

All functions are considered Impl-Types because JavaScript uses functions as constructors.

In Mason you should uses [class]('./class') to create Impl-Types.


## Kind

`Kind`s group multiple Impl-Types.

	use
		msl.Type.Kind _ kind!

	Num-or-Str = new Kind
		implementors. [ Number String ]

	. 0:Num-or-Str
	. "0":Num-or-Str
	. [ 0 ]:Num-or-Str

	# You can also leave the implementors open-ended.
	Open-Kind = new Kind
		doc. "Anyone can implement this."
	kind! String Open-Kind
	kind! Number Open-Kind

Kinds can even implement other Kinds.


# method

`Method`s are Functions that act differently on different types.

The implementation function chosen depends on the first parameter.

Methods use a `Symbol`, `method.impl-symbol`, to store the implementation, so they don't risk conflicts with other methods.

(You can also manually supply a string for it, as was done for `to-string`.)

`impl!` creates a method implementation in a type's prototype.
`self-impl!` implements the method directly on some object.

	use
		msl.Type.Method _ impl! self-impl!

	magnitude = new Method
		# This is called when the argument isn't implemented for.
		default. .|
			"{this}".length
		allow-null?. true

	# This modifies Number.prototype.
	impl! magnitude Number .|
		this
	impl! magnitude String .|
		.length

	# This modifies String, not String.prototype.
	self-impl! magnitude String .|
		42

	. magnitude 1
	. magnitude "two"
	. magnitude String
	# This uses the default implementation.
	. magnitude null

You can implement a Method on a Kind, which will pass the implementation down to its implementors (recursively, if its implementors are also Kinds).



# prefix

Mason uses prefixes to indicate type.
This is just a convention; the compiler doesn't do anything special.

Looks like | Means | Example
:-: | :-: | :-:
`?a` | `?` (option) | `?find`
`$a` | `$` (promise) | `$after-time`
`@a` | `@` (bag) | `@prime = [ 2 3 5 ]`
`a->b` | `Map` (from a to b) | `name->address`
`a~` | `Generator` | `each~`
`a?` | `Boolean` | `even?`

An optional promise is `?$a`; a promise for an option is `$?a`.

`a!` indicates a function that performs some action rather than just returning a value.
