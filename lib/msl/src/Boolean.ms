import
	.Type.primitive Bool

implies. \if?:Bool ~then?:Bool
	| Whether `then` is true whenever `if` is.
	| Always true when `if` is false.
	cond if? then? true

xor. \a:Bool b:Bool
	| True if `a` and `b` differ.
	cond a (not b) b
