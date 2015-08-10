`class` creates a native JavaScript class.
It is the normal way to create a concrete type.

The class body consists of a constructor and method definitions.
Methods being defined should be `Method`s or strings.

	use
		msl.to-string

	# If superclass is missing, it will be Object, so this is just for show.
	Point = class
		construct! x y
			.x ::= x
			.y ::= y

		to-string |
			"({.x} {.y})"

		# Method bodies don't need a `.` in front but do need `!` and `~` where appropriate.
		"transpose!" !|
			y = .y
			.y := .x
			.x := y

	p = new Point 1 2
	. to-string p
	p.transpose!()
	. to-string p


## static

The class itself often has interesting properties.

A `do!` block assigns the focus to the class.

`static` defines static methods on the class.

	use
		msl.@.@
		msl.@.@-Type empty
		msl.compare =?
		msl.Type.Kind kind!

	Point = class
		do!
			# Point isn't really an @, but I'm here to prove a point.
			kind! _ @
			_.origin = new _ 0 0

		static
			# If it's an @ it should define "empty."
			empty |
				Point.origin
			"from-array" |arr
				assert! =? 2 arr.length
				new Point arr[0] arr[1]

		construct! x y
			.x = x
			.y = y

	. empty Point
	. Point.from-array [ 1 2 ]

The parts of a class *must* come in this order: `do!`, `static`, `construct!`, then methods.


## inheritance

Inherit from a superclass by placing it on the same line as `class`.

	A = class
		static
			"stat" |
				"static methods are inherited"

		construct!
			.a = 1

	B = class A
		construct!
			# Super-constructor *must* be called before accessing `this`.
			super()
			.b = 1

	b = new B
	. b.a
	. b.b
	. B.stat()

The subclass will inherit all of the superclass' static and instance methods.
