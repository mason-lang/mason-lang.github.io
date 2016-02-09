import
	..js js-typeof
	.Pred-Type

pt = \type-name typeof-res
	new Pred-Type
		name. type-name
		predicate. \_
			==? js-typeof_ typeof-res

Num. pt name 'number

Str. pt name 'string

Bool. pt name 'boolean

Sym. pt name 'symbol
