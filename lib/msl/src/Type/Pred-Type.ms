import
	|| ..Function Pred
	..js defined?
	..polys sub
	.Poly self-impl!
	.Trait _ has-trait?
	.Type _ => has-instance?
import~
	..@.@ any? @map

Pred = Function

Pred-Type. class trait Type
	| Arbitrary predicates can be made into types using Pred-Type.
	construct params
		Object.assign this params
		todo assert .name:Str
		assert .predicate:Pred

	(has-instance?) \value
		.predicate value

region Opt
	Opt. new Pred-Type
		| A value which could be anything, even undefined.
		name.
		predicate. \
			true

	self-impl! sub Opt
		| Contains undefined or an instance of Exists-Type.
		\Exists-Type:Type
			ET = Exists-Type
			new Opt-Sub ET

	Opt-Sub = class trait Type
		| Result of calling Opt[something].
		construct .Exists-Type:Type
			pass

		get name
			"Opt[#(.Exists-Type.name)]"

		(has-instance?) \_
			or (not defined?_) :.Exists-Type

Any. new Pred-Type
	| Not undefined.
	name.
	predicate. defined?

ObjLit. new Pred-Type
	| Matches only Objects which have no type (other than Object itself).
	name.
	predicate. \_
		and :Object ==? Object.getPrototypeOf_ Object.prototype

todo singleton
Union.
	| Type that matches one of several types. Analogous to `or`.
	name.

self-impl! sub Union \...types
	new Pred-Type
		name.
			names = @map types &.name
			"Union[#(=> String names " ")]"
		predicate. \_
			any? types \possible-type
				:possible-type

todo singleton
Class.
	todo doc
	name.

self-impl! sub Class \typ
	new Pred-Type
		name. "Class[#(typ.name)]"
		predicate. \case
			:Function
				_.prototype:typ
			:Trait
				and typ:Trait (has-trait? _ typ)
			else
				false
