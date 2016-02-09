import
	msl.assert assert-call!
	msl.Type.Pred-Type Union Class
	..tests

tests 'Pred-Type
	Any -> !\
		assert-call! has-instance?[Any]
			[0] -> true
			[null] -> true
			[undefined] -> false

	ObjLit -> !\
		assert-call! has-instance?[ObjLit]
			[{a. 1}] -> true
			[ObjLit] -> false

	Union -> !\
		|| As these are all Impl-Types, it would be better to use a Trait.
		SBN = Union[Str Bool Num]
		assert =? SBN.name "Union[Str Bool Num]"
		assert 'true:SBN
		assert true:SBN
		assert 1:SBN
		forbid null:SBN

	Class -> !\
		assert-call! has-instance?
			[Class[Object] String] -> true
			[Class[String] Object] -> false
			|| Works for Trait too
			[Class[@] Array] -> true
			[Class[@] Set] -> true
