import
	.compare
	.Type.Poly impl!
	.Type.Pred-Type
	.Type.primitive Str
	.Type.Trait
import~
	.@.@ count

String-Test. new Trait
	| Something we can compare a String to.
	name.
	implementors. [String RegExp]

Char. new Pred-Type
	| Any String with only one character.
	name.
	predicate. \_
		and :Str =? count_ 1

indent. \_:Str
	| Adds a `\\t` to all `\\n` in `str`.
	| Does *not* do anything to the first line.
	_.replace (new RegExp "\n" 'g) "\n\t"

impl! compare String .\other
	.localeCompare other
