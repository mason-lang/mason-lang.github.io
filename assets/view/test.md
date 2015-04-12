Mason code should generally not have external documentation.
Documentation is just another part of declarative data, which Mason is good at.

Ending an Obj block with a function assigns those properties to the function.

	use
		mason.!
		mason.@.@ fold
		mason.@.Range range-incl
		mason.$ $done
		mason.math.methods * +
		mason.math.Num Nat
		mason.meta.tests.test $test-fun
		mason.Try fails?

	factorial =
		doc. "Product of all numbers from 1 to n, inclusive."
		test. |
			! fails? |
				factorial -1
			[ 0 ] -> 1
			[ 5 ] -> 120
		|n:Nat
			fold (range-incl 2 n) 1 *

	$done ($test-fun factorial

	factorial.doc

In addition to a string, functions could also have more structured metadata such as author, etc.

Any property whose name *ends in `test`* is considered debug-only.

One example is `$test`, whose code will be run inside of `$ing`.

	use
		mason.!
		mason.$ $done $resolved
		mason.compare =? <?
		mason.Fun Act
		mason.io.console log!
		mason.io.time $after-time
		mason.math.Num _ Nat
		mason.math.methods - +
		mason.meta.tests.test $test-fun
	use-debug
		mason.control Ref! mod! get

	$interval =
		$test. ~|
			ref-n = Ref! 0
			n-times = 5
			<~ $interval n-times 1000 |
				# You'll need to open devtools to see this...
				log! (get ref-n)
				mod! ref-n +[1]
			! =? n-times (get ref-n
		|n-times:Nat time-ms:Num act:Act
			case n-times
				<? 0 _
					$after-time time-ms |
						act()
						$interval (- n-times 1) time-ms act
				else
					$resolved()

	$done ($test-fun $interval
	()
