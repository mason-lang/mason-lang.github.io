| Functions implementing behavior native to JavaScript.

op = \op-name
	Function 'a 'b "return a #op-name b"
unary-op = \op-name
	Function '_ "return #op-name _"

js-and. op "&"
js-caret. op "^"
js<<. op '<<
js>>. op '>>
js>>>. op '>>>
js-bar. op "|"
js~. unary-op "~"
js-delete. Function 'obj 'prop "delete obj[prop]"
js-in. op 'in
js-typeof. unary-op 'typeof

defined?. \_
	| False for `undefined`.
	not ==? _ undefined

null?. \_
	| True only for `null`.
	==? _ null

exists?. \_
	| False for `null` or `undefined`.
	not or (==? _ null) ==? _ undefined
