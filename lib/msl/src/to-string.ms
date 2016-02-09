import
	global Set
	.private.bootstrap msDef
	.Type.Poly

to-string. new Poly
	name.
	allow-null?. true
	impl-symbol. 'toString
	default. .\
		switch this
			null
				'null
			undefined
				'undefined
			else
				inspect-object this

inspect-seen = new Set

inspect. new Poly
	name.
	allow-null?. true
	wrap. \impl arg opts
		case
			inspect-seen.has arg
				'<recursive>
			else
				inspect-seen.add arg
				with impl.call arg opts
					inspect-seen.delete arg
	default. to-string.default
|| See also private/impl-inspect.ms

inspect-object = \
	"<object with no prototype>"

msDef 'inspect inspect
