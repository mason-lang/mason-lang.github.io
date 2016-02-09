import
	msl.assert assert-call!
	msl.compare binary=?
	msl.Try fails?
	msl.Type.Poly impl-double! ?impl-for ?self-impl-for self-impl-for
	..tests

tests 'Poly
	Poly -> !\
		m = new Poly
			name.
			allow-null?. true
			default. \
				'default
		impl! m String \
			'String
		impl-double! m Number Number \
			"Number Number"
		impl-double! m Number String \
			"Number String"

		assert-call! m
			[null] -> 'default
			['a] -> 'String
			[1 1] -> "Number Number"
			[1 'a] -> "Number String"
		assert fails? \
			m 1 m

		assert =? 'wrap-call-arg
			wrap-method = new Poly
				name.
				default. .\
					"call-#this"
				wrap. \impl arg
					"wrap-#(impl.call arg)"
			wrap-method 'arg

	self-impl! -> !\
		todo
		pass


	?impl-for ->
		todo Some positive example
		[binary=? Poly] -> ?None

	impl-for -> !\
		todo Some positive example
		todo assert (impl-for has-instance? Trait).call Impl-Type Trait
		pass

	?self-impl-for -> !\
		todo
		pass

	self-impl-for -> !\
		todo
		pass
