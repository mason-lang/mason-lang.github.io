Ending an Obj block with a function assigns those properties to the function.

	use
		mason.@.@ fold
		mason.@.Range range-incl
		mason.$ $done
		mason.math.methods *
		mason.math.Number Nat
		mason.meta.tests.test $test-fun
		mason.Try fails?

	factorial =
		doc. "Product of all numbers from 1 to n, inclusive."
		test. |
			assert! fails? |
				factorial -1
			[ 0 ] -> 1
			[ 5 ] -> 120
		|_:Nat
			fold (range-incl 2 _) 1 *

	$done ($test-fun factorial)

	factorial.doc

In addition to a string, functions could also have more structured metadata such as author, etc.

Any property whose name *ends in `test`* is considered debug-only.

One example is `$test`, whose code will be run inside of `$ing`.

	use
		mason.$ $done $resolved
		mason.compare =? <?
		mason.Function Action
		mason.io.time $after-time
		mason.math.Number decr incr Nat
		mason.meta.tests.run-tests $test-fun

	$interval =
		$test. ~!|
			n ::= 0
			n-times = 5
			<~ $interval n-times 1000 !|
				# You'll need to open devtools to see this.
				global.console.log n
				n := incr n
			assert! =? n-times n
		|n-times:Nat time-ms:Number act:Action
			case n-times
				<? 0 _
					$after-time time-ms |
						act()
						$interval (decr n-times) time-ms act
				else
					$resolved()

	$done ($test-fun $interval)
