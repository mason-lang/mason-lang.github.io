import
	..control opr
	..to-string
	.Impl-Type
	.Poly impl!
	.Type has-instance?

Enum. class trait Impl-Type
	| A Concrete-Type with a small number of instances.
	| Great for using with `switch`.

	construct params
		.name := params.name todo :Str
		.prototype := opr params.prototype ~(Object.create Object.prototype)
		.values := params.values todo :Array[Str]

		for value-name of .values
			enum-val = Object.create .prototype
			enum-val.name := value-name
			.(value-name) := enum-val
		.prototype.constructor := this
		enum-name = .name
		impl! to-string this .\
			"#enum-name.#(.name)"

	(has-instance?) \_
		Object.prototype.isPrototypeOf.call .prototype _
