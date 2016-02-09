import
	.Boolean xor
	.js defined? exists? js-delete
	.Type.primitive Bool
	.Type.Trait
	.Type.Type =>
import~
	.@.@ ++ all? count empty? @keep
	.@.? ?-or Opt->? ?None
	.@.Map.Map _ make-map
	.@.Set.Id-Set

Object-Key. new Trait
	| Can be used as a name for a property of an object.
	name.
	implementors. [String Symbol]

flag?. \:Bool obj flag:Object-Key
	| If it has a property for the flag, uses that. Otherwise false.
	?-or (?property obj flag) false

~forbidden-fun-props = => Id-Set ['arguments 'caller]
@all-properties. \_
	todo SYNTAX build~
	| Every property name directly stored in an object.
	| Includes non-enumerable properties and symbols.
	props = Object.getOwnPropertyNames_
	own-names = cond :Function (@keep props &(not :forbidden-fun-props)) props
	++ own-names Object.getOwnPropertySymbols_

@properties. \_
	| Like @all-properties, but excludes non-enumerable properties and symbols.
	cond exists?_ Object.keys_ []

?property. \_ prop-name:Object-Key
	| `?` containing the value of the property, if it exists.
	if property? _ prop-name
		_.(prop-name)

?property-with-proto. \_ prop-name:Object-Key
	| Like `?property`, but also looks through the prototype chain.
	cond exists?_ (Opt->? _.(prop-name)) ?None

property?. \_ prop-name:Object-Key
	| Whether there is a property by that name.
	and exists?_ (Object.prototype.hasOwnProperty.call _ prop-name)

property-with-proto?. \_ prop-name:Object-Key
	| Like `property?` but looks through the prototype.
	and exists?_ (defined? _.(prop-name))

todo  Handle recursive references.
object=?. \a b
	| For Objects, whether they are of the same type and have `=?` properties.
	| For primitives, whether they are `=?`.
	case
		not or a:Object b:Object
			==? a b
		xor a:Object b:Object
			false
		else
			same-type = ==? (Object.getPrototypeOf a) (Object.getPrototypeOf b)
			and same-type
				ak = Object.getOwnPropertyNames a
				bk = Object.getOwnPropertyNames b
				and (=? (count ak) (count bk))
					all? ak \k
						=? a.(k) b.(k)

empty-Object. Object.freeze {}

empty-Object?. \_:Object
	| Whether there are no properties, not even hidden ones.
	empty? @all-properties_

Object->Map. \obj
	| A Map whose keys are property names and whose values are the properties' values.
	make-map (@all-properties obj) &(obj.(_))

Map->Object. \_:Map
	| Given a Map whose keys are Strings, creates an Object whose Object->Map is that.
	with {} as obj
		for elem of _
			todo SYNTAX Array destructure
			obj.(elem[0]) := elem[1]

region Mutator methods
	delete-property!. !\_:Object prop-name:Object-Key
		assert property? _ prop-name
		js-delete _ prop-name

object-merge. \...objects
	Object.assign {} ...objects

object-select. \obj:Object ...@keys
	with {} as kept
		for key of @keys
			kept.(key) := obj.(key)

map-object-values. \obj:Object mapper:Function
	with {} as mapped
		for key of @properties obj
			mapped.(key) := mapper obj.(key)
