# Locals

`=` declares a new immutable local.
`::=` declares a mutable one and `:=` mutates it.

	a = 0
	. a
	b ::= 1
	. b
	b := 2
	. b

Locals are local to the block they're declared in. The compiler will stop you if you try to access an uninitialized local.

# Properties

To access a property on an object, use `obj.prop`.
To access a property on `this`, use `.prop`.

	obj = (x. 0)
	. obj.x
	f = .|
		.x
	. f.call obj

Object properties assignment has a similar syntax to local assignment.
`=` creates a readonly property, while `::=` creates a mutable one.
`:=` compiles to JavaScript's normal property assignment, meaning it mutates of creates properties on the fly.

	obj = (x. 0)
	obj.y = 1
	obj.z ::= 2
	obj.z := 3
	obj

To access a property of variable name, use `p` or `send`.

	use
		mason.Object p send

	obj = (x. 0 f. .|
		.x
	. p obj "x"
	. send obj "f"