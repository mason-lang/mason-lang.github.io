import
	global TypeError
	..private.bootstrap containsImplSymbol msDef
	..to-string
	.Impl-Type
	.Poly _ impl!
	.Trait
import~
	..@.? ?-or
	..Object ?property-with-proto
	..to-string inspect

Type. trait
	todo doc

	(to-string) \
		.name

todo  Should not be necessary, Trait < Impl-Type < Type
impl! to-string Trait .\
	.name

has-instance?. new Poly
	| Whether some collection of things as as an element `instance`.
	name.
	args. ['instance]
	impl-symbol. containsImplSymbol
msDef 'hasInstance has-instance?

todo num-extracteds:Nat
extract. poly \candidate num-extracteds
	| Given a type and arbitrary value:
	| If the value is of the type, return an array of sub-values.
	| Otherwise, return `null`.
	| The array of values are taken into local variables.
	| For example:
	todo examples
	abstract

msDef 'extract extract

msDef 'checkInstance \expected-type value value-name
	assert value:expected-type throw new TypeError
		"#value-name is no #(expected-type.name), is a #((type-of value).name): #(inspect value)"
	value

=>. new Poly
	todo Don't take additional args (get rid of `=> String` joining nonsense)
	todo args: convert-to:Type convert-me (may take additional args)
	| Converts a value to a given type.
	name.
	wrap. \impl convert-to-type converted opts
		case converted
			:convert-to-type
				_
			else
				impl.call convert-to-type _ opts

todo rename
type-of. \:Impl-Type _
	| Most specific Impl-Type for a value.
	?-or (?property-with-proto _ 'constructor) Object

todo needed?
|| Make Impl-Type a Type here due to bootstrapping order issues.
trait! Impl-Type Type
