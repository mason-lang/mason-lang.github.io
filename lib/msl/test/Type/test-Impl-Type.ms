import
	msl.Type.Impl-Type _ Self-Type
	msl.Type.Trait has-trait?
	..tests

tests 'Impl-Type
	Impl-Type -> !\
		A = trait
		B = trait
		C = class
		trait! B A
		trait! C B
		assert has-trait? B A
		assert has-trait? C B
		assert has-trait? C A
		forbid has-trait? A B

	Self-Type -> !\
		m = poly \
			abstract
		x = {}
		impl! m (new Self-Type x) \
			1
		assert =? (m x) 1
