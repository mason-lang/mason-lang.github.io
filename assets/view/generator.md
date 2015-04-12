A `Generator!` is a block of code that yields values to and recieves responses from a context.
These are also known as coroutines.

More specifically, a Generator! is a mutable value which the context calls the `next` method on, causing it to execute code up until the next yield.
The "context" is the Fun that uses the generator.

A Fun returning a Generator! is written with `~|` instead of `|`.

`<~`, pronounced "yield", gives a value to the context.
It looks and acts like a normal Fun, but does not return synchronously.

	use
		mason.@.Stream

	# The Stream context treats the yielded values as elements of a @.
	Stream ~|
		<~ 1
		<~ 2
		<~ 3

They are useful when:

* Code could run lazily, for example yielding the values of a `Stream` above.
* Code could run asynchronously. For example, `$ing` lets you yield `$`s and recieve their results later.
* There's some information that you want threaded through everything via a context.
* Your code has a side-effect (such as logging) that you want dealt with by the context rather than directly.

You can also recieve values from the context.

	use
		mason.control loop End-Loop
		mason.math.methods +

	getting-nats = |gets-nats
		gen = gets-nats()
		loop 0 |last
			value done = gen.next last
			case
				done
					End-Loop value
				else
					+ 1 last

	getting-nats ~|
		. <~
		. <~
		. <~

You can use `<~` in place of `=` to both send a value to the context and take one back.

Note that `(<~ 1)` is an expression while `local <~ 1` is a statement.

	use
		mason.control loop End-Loop
		mason.math.methods +

	incrementing = |yields-numbers
		gen = yields-numbers()
		loop 0 |last-value
			value done = gen.next last-value
			case
				done
					End-Loop value
				else
					+ 1 value

	incrementing ~|
		two <~ 1
		three <~ two
		<~ three

You can also let one Generator! delegate to another.
`<~~`, pronounced "yield-to", runs the yielded-to Generator! inside of the same context.

	use
		mason.@.Stream

	yield-both = ~|a b
		<~ a
		<~ b
	Stream ~|
		# This is equivalent to `<~~ (yield-both 1 2)`.
		# `<~~` only ever has the one "argument", which is another Generator! to yield to.
		<~~ yield-both 1 2
		<~~ yield-both 1 2

Funs that end in `~` by convention return Generator!s.
In that case, you'll usually want to remember to `<~~` it.

	use
		mason.@.@ ++ map
		mason.@.Stream
		mason.Generator! each~
		mason.math.methods *

	doubled-then-tripled = |_
		Stream ~|
			<~~ each~ _ ~|_
				<~ * 2 _
			<~~ each~ _ ~|_
				<~ * 3 _

	_ = [ 1 2 3 ]
	. doubled-then-tripled_
	# Of course, it's much easier to just do:
	. ++ (map _ *[2]) (map _ *[3])