import
	.Trait _ unchecked-trait!

Impl-Type. trait
	| Every Impl-Type should have a `prototype` property.
	todo more doc

unchecked-trait! Function Impl-Type || Function isa Function, so can't use trait!
trait! Trait Impl-Type

Self-Type. class trait Impl-Type
	| Impl-Type with exactly one member.
	| Calling impl! on it will directly modify an Object to contain method implementations.

	construct .prototype:Object
		pass
