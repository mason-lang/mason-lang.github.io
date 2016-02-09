todo  Move

import
	.@.@ _ count empty empty? from-stream @map
	.@.Seq.Seq
	.compare binary=? sort
	.control opr
	.to-string
	.Type.Impl-Type Self-Type
	.Type.Poly impl-double!
	.Type.Pred-Type Opt
	.Type.primitive Str
	.Type.Type =>

todo  self-impl-double! ?
impl-double! => (new Self-Type String) @ \vals joiner:Opt[Str]
	joiner := opr joiner ""
	todo @for:Array
	(=> Array (@map vals to-string)).join joiner

trait! String Seq
	static
		(empty) \
			""

		(from-stream) \_
			todo Should probably convert to string.
			from-stream Array _

	(count) \
		.length

	(empty?) \
		=? 0 .length

	|| Don't let Seq override eq?
	(binary=?) \other
		==? this other

	todo  Should this be necessary?
	(sort) \?sort-by:Opt[Function]
		(sort.default.call this ?sort-by).join ""
