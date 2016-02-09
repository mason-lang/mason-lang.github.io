import
	..polys sub
	.primitive Str
	.Type _ has-instance?

Alias-Type. class trait Type
	| Contains the same instances as another type (officially), but has its own meaning and identity.

	construct params
		Object.assign this params
		assert .name:Str
		assert .alias-of:Type

	(has-instance?) \value
		value:.alias-of

	(sub) \...args
		sub .alias-of ...args
