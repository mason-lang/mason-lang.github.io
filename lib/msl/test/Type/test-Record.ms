import
	..tests
	msl.Type.Trait has-trait?
	msl.Type.Record

tests 'Record
	Record -> !\
		Point = class x y
		assert =? Point.field-names ['x 'y]
		assert has-trait? Point Record

		p = new Point 1 2

		assert =? p.toString() "(Point 1 2)"

		todo SYNTAX :Point x y = p
		case p
			:Point x y
				assert =? x 1
				assert =? y 2
