import
	msl.Object Object-Key
	msl.Try fails-with?
	msl.Type.Trait can-subtype? @concrete-implementors
	..tests

tests 'Trait
	Trait -> !\
		region Inheritance chans - one way
			A = trait
			B = trait
			C = class trait B
			trait! B A
			c = new C
			assert c:A

		region Inheritance chains
			X = trait
			Y = trait
			Z = class trait Y
			trait! Y X
			z = new Z
			assert z:X

		region Poly makes sure to do impl! on all Concrete-Type_s inheriting from a Trait.
			asdf = poly \
				abstract
			impl! asdf X \
				1
			assert =? (asdf z) 1
			assert z:X

		region Closed Trait
			Closed = new Trait
				name.
				implementors. [C Z]

			assert fails-with? "Closed is not open to new subtypes." !\
				trait! X Closed

	can-subtype? ->
		[@] -> true
		[Object-Key] -> false

	@concrete-implementors -> \
		X = trait
		Y = trait
		Z = class trait X
		W = class trait Y
		trait! Y X
		[X] -> [Z W]
