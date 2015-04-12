A `Type` is something that `contains?` a certain set of values.
Anything implementing `Type` (more on `Kind`s later) and defining `contains?` is one.

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


# Making Types

## Pred-Type

You can just make any function a Type.

	use
		mason.compare =?
		mason.Type.Pred-Type

	Equal-To-Three = Pred-Type
		predicate. |_
			=? _ 3

	three:Equal-To-Three = 3
	plus-one = |_:Equal-To-Three
		4
	plus-one three


## Impl-Type

An `Impl-Type` is a type with an associated prototype.
This allows `Method`s to be defined on it, which will be introduced later.

Every Fun is considered an Impl-Type, meaning JavaScript's function "types" (Str, Num, etc.) can be used as Mason types.


## Obj-Type

In most programming languages, types can be used as factories for values.
Mason is no exception.

An `Obj-Type` describes Objs which have certain properties.
A value must be created with the Obj-Type as a constructor to qualify (meaning, these are nominal types).

	use
		mason.Str
		mason.Type.Obj-Type

	Name = Obj-Type
		props.
			first. Str
			last. Str
	# Create it by passing an Obj into the constructor.
	Name
		first. "Joe"
		last. "Shmoe"

These also support optional properties and default values.


## Kind

`Kind`s group multiple sub-types into one.

	use
		mason.math.Num
		mason.Str
		mason.Type.Kind _ kind!
		mason.Type.Type contains?

	Num-or-Str = Kind
		implementors. [ Num Str ]

	. contains? Num-or-Str 0
	. contains? Num-or-Str "0"
	. contains? Num-or-Str [ 0 ]

	# You can also leave the implementors open-ended.
	# This means that Kinds can act both as "unions" and as "interfaces".

	Open-Kind = Kind
		doc. "Anyone can implement this."
	kind! Str Open-Kind
	kind! Num Open-Kind

Kinds support multiple inheritance and can be applied to any Impl-Type, including other Kinds.

If some of the subtypes are not Impl-Types, you'll have to use `Union` instead, which you can't define Methods on.

Type is a Kind.
Kind is an Obj-Type (and Obj-Types are all Impl-Types, which are all Types).
And Obj-Type is an Obj-Type!


# Method

`Method`s are Funs that act differently on different Impl-Types.
They delegate to another function based on the type of their first parameter.

	use
		mason.@.@ count
		mason.Fun identity
		mason.math.Num
		mason.Str
		mason.Type.Method _ impl! self-impl!
		mason.Type.Kind

	Num-or-Str = Kind
		implementors. [ Num Str ]

	magnitude = Method
		default. |
			0

	impl! magnitude Num identity
	impl! magnitude Str count

	. magnitude 1
	. magnitude "two"
	# Since we provided a default, this will return '0'.
	. magnitude [ ]

Note that JavaScript's special `this` variable is not used and we use regular functions as implementations.

Double dispatch is also supported via `impl! method Type-A Type-B implementation`, but is slow.


# Focus testing

There's a neat syntax for testing the type of the focus.

	use
		mason.@.@ count
		mason.math.Num
		mason.Str

	_ = 1
	. :Num
	. :Str

	# It goes great with `case`!
	magnitude = |case
		:Num
			_
		:Str
			count_
		else
			0
	. magnitude 1
	. magnitude "two"
	. magnitude [ ]


# Naming

Mason uses sigils to indicate type.
This is just a convention and may not always be appropriate.

Looks like | Means | Example
:-: | :-: | :-:
`?a` | `?` (option) | `?find`
`$a` | `$` (promise) | `$read-file "Hello.txt"`
`@a` | `@` (bag) | `@prime = [ 2 3 5 ]`
`a->b` | `Map` (from a to b) | `name->address`
`a~` | `Generator!` | `each~`
`a?` | `Bool` | `even?`

An optional promise is `?$a`; a promise for an option is `$?a`.



Other uses of symbols in names:

Looks like | Means | Example
:-: | :-: | :-:
`a!` | Mutation or write-like I/O | `log! "Hello, world!"`
`A!` | Mutable type | `empty Map!`
`!` | Assertion | `! <? 1 2`
