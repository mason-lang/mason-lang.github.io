import
	.@.? ?->nullable
	.js null?
	.Type.Poly impl!
	.Type.primitive Str
	.Type.Type has-instance? extract

impl! has-instance? RegExp .\_
	.test _

impl! extract RegExp .\_ num-extracteds
	?->nullable if :Str
		match = .exec_
		|| Make sure we don't modify the regexp.
		.lastIndex := 0
		?->nullable if and (not null? match) =? match.length + 1 num-extracteds
			match.shift()
			match
