| Advanced assertions.
| Generally you should just use the `assert` keyword.

import~
	.@.@ _ @map
	.@.Map.Map
	.@.Seq.Seq @tail
	.Function Pred
	.to-string inspect
	.String indent
	.Type.Type =>

assert-call!. !\fun:Function args->result:Map
	todo args->result:Map[Array Any]
	| For each entry in args->result, asserts that calling `fun` with arguments of key will `=?` the value.
	assert-call-with! &=? fun args->result

assert-this-call!. !\fun:Function args->result:Map
	todo doc
	todo args->result:Map[Array Any]
	for args->result
		todo SYNTAX Array destructure
		args:@ = _[0]
		expected-res = _[1]
		actual = fun.apply args[0] (@tail args)
		assert =? actual expected-res throw "
			#(fun.name) of:
				#(indent (=> String (@map args inspect) "\n"))
			Should =?:
				#(indent (inspect expected-res))
			Got:
				#(indent (inspect actual))

assert-call-with!. !\equal?:Pred fun:Function args->result:Map
	| Like !call but allows any equality predicate.
	todo args->result:Map[Array Any]
	for args->result
		todo SYNTAX Array destructure
		args:@ = _[0]
		expected-res = _[1]
		actual = fun ...args
		assert equal? actual expected-res throw "
			#(fun.name) of:
				#(indent (=> String (@map args inspect) "\n"))
			Should #(equal?.name):
				#(indent (inspect expected-res))
			Got:
				#(indent (inspect actual))
