A `Type` is something that `contains?` a certain set of values.

When declaring a local, including in function arguments, use `:` to assert a value's type. This calls `contains?` and asserts that the result is true.

	use
		mason.math.methods +
		mason.math.Num Int

	one:Int = 1
	plus-one = |:Int _:Int
		+ _ one
	plus-one 1
	# Uncomment this and it will fail:
	# plus-one 1.5

You can also use `var:Type` anywhere else as a value testing the type.
If the variable name is missing, the test is on the focus.

	x = 1
	. x:Number
	. x:String
	_ = "one"
	. :Number
	. :String


## Pred-Type

You can make any predicate into a Type.

	use
		mason.compare =?
		mason.Type.Pred-Type

	Three = new Pred-Type
		predicate. |_
			=? 3 _

	. 3:Three
	. 4:Three


## Impl-Type

An `Impl-Type` is a type with an associated prototype. Most types are Impl-Types.
This allows `Method`s to be defined on it, which will be introduced later.

All functions are considered Impl-Types because JavaScript uses functions as constructors.

In Mason you should uses [classes]('./class') to create Impl-Types.


# Method

`Method`s are Functions that act differently on different Impl-Types.
The implementation function chosen depends on the first parameter.
Methods use an `impl-symbol` to store the implementation, meaning that they don't suffer from monkey-patching conflicts.

`impl!` creates a method implementation in a type's prototype.
`self-impl!` implements the method directly on some object.

	use
		mason.Type.Method _ impl! self-impl!

	magnitude = new Method
		default. |
			0

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


## Kind

`Kind`s group multiple Impl-Types.

	use
		mason.Type.Kind _ kind!

	Num-or-Str = new Kind
		implementors. [ Number String ]

	. 0:Num-or-Str
	. "0":Num-or-Str
	. [ 0 ]:Num-or-Str

	# You can also leave the implementors open-ended.
	Open-Kind = Kind
		doc. "Anyone can implement this."
	kind! String Open-Kind
	kind! Number Open-Kind

Kinds can even implement other Kinds.

You can even implement methods on Kinds, which passes the implementation down to its implementors.


# Naming

Mason uses sigils to indicate type.
This is just a convention and may not always be appropriate.

Looks like | Means | Example
:-: | :-: | :-:
`?a` | `?` (option) | `?find`
`$a` | `$` (promise) | `$read-file "Hello.txt"`
`@a` | `@` (bag) | `@prime = [ 2 3 5 ]`
`a->b` | `Map` (from a to b) | `name->address`
`a~` | `Generator` | `each~`
`a?` | `Boolean` | `even?`

An optional promise is `?$a`; a promise for an option is `$?a`.
`a!` indicates a function that performs some action rather than just returning a value.
