import
	...control opr
	...Type.Pred-Type Class Opt
	..@ _ ++! empty
	.Map _ get-or-add!

add-to-@!. \map:Map key added:@ @-type:Opt[Class[@]]
	| Treat `map` as a multi-map and add `added` to the @ associated with `key`.
	| `@-type` is the type to use to create the `@` if it's not already there.
	_ = get-or-add! map key ~
		empty (opr @-type Array)
	++! _ added

group. \@value:@ group-by:Function
	| Creates groups of elements which all have the same result for some function.
	| `(group @x f)[k]` should be the elemens for which `f em` is `k`.
	map = empty Map
	for @value
		key = group-by _
		add-to-@! map key [_]
	map
