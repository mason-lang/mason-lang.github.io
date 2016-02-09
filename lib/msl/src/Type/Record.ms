import
	..private.bootstrap msDef
	.Type extract

Record. trait
	todo static get 'field-names
	todo	abstract

	static
		(extract) \_
			cond _:this (field-values this _) null

	toString \
		"(#(.constructor.name) #((field-values .constructor this).join " "))"

field-values = \cls instance
	cls.field-names.map &(instance.(_))

msDef 'beRecord !\_ field-names
	_.field-names := field-names
	trait! _ Record
