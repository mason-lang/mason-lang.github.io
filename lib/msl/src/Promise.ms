import
	global _ console setTimeout
	.@.@
	.control opr
	.Function Action
	.polys sub
	.Type.Poly self-impl!
	.Type.Pred-Type Any
	.Type.primitive Num

self-impl! sub Promise \
	Promise

|| See also $ section in Try.ms.

$do. \$act:Action[Promise]
	| Given an async function (`$!\`), run it and log any errors.
	$done $act()

$done. \_:Promise
	| Don't forget `$done`!
	| Logs any errors that happen inside a promise.
	| It would be great if we could make these errors happen top-level...
	| This is probably a kludge. See <http://blog.soareschen.com/the-problem-with-es6-promises>.
	_.catch !\err
		|| Don't use log! because there if errors happen in there, the error disappears!
		console.log "
			=== error ===
			#(err.message)
			#(err.stack)
			=== error ===
		|| We're already $done so this shouldn't matter, but just in case...
		throw err

$fail-after-time. \:Promise _:Promise time-ms:Num
	| Fails if it takes too long.
	new Promise !\resolve reject
		_.then resolve
		timeout = !\
			reject new Error "Took longer than #time-ms milliseconds."
		setTimeout timeout time-ms

setImmediate = opr global.setImmediate \action
	setTimeout action 0

$delay. \delayed:Action
	| Schedules a computation to happen later.
	| Does *not* run it in parallel.
	| It should go without saying,
	| but if you needlessly $delay things all the time your program will take longer.
	new Promise \resolve reject
		setImmediate !\
			except
				try
					resolve delayed()
				catch error
					reject error

$keep. $\:Array keep-some:@ $keep-if?:Function[Any Promise[Boolean]]
	| Asynchronously runs keep-if? on each element and creates an Array of those that match.
	| Maintains the original order.
	@for keep-some
		if $ $keep-if?_
			. _
