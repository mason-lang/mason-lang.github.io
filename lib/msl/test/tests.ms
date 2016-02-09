import
	global describe it
	source-map-support install
	msl.assert assert-call!

install()

tests. !\test-name mp
	describe test-name !\
		for pair of mp
			todo syntax array destructure
			key = pair[0]
			val = pair[1]

			it key.name \
				case key
					:Function
						case val
							:Function
								res = val()
								case res
									:Promise
										_
									:Map
										todo handle promises in call
										assert-call! key res
										null
									else
										null
							:Map
								assert-call! key val
							else
								console.log val
								throw
					else
						val()
