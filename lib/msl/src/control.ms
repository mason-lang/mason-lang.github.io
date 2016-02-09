import
	.js defined?
	.Type.Pred-Type Opt
import~
	.@.Seq.Seq ++>!

do-times!. !\n-times action
	| Performs `action` `n-times` times.
	todo n-times:Nat
	assert >=? n-times 0
	todo until =? n-times 0
	for
		if =? n-times 0
			break
		action()
		n-times := - n-times 1

opr. \_:Opt ~default
	| Fills in an Opt with a default value.
	cond defined?_ _ default

todo SYNTAX build keyword
build. \calls-build:Function
	| Passes in a `yield` Function to `calls-yield`.
	| Returns a Seq of what `calls-yield` called `yield` with.
	with [] as arr
		calls-build !\_
			++>! arr [_]
