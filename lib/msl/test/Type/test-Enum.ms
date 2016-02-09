import
	msl.Type.Enum
	msl.Type.Type type-of
	..tests

tests 'Enum
	Enum -> !\
		Fruit = new Enum
			name.
			values.
				. 'apple
				. 'orange
		prices =
			Fruit.apple -> 1
			Fruit.orange -> 2
		assert =? prices[Fruit.apple] 1
		assert =? prices[Fruit.orange] 2
		assert =? (type-of Fruit.apple) Fruit
		assert =? Fruit.apple.toString() "Fruit.apple"
