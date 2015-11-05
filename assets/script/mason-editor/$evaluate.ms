|-require- js
	fun = Function 'define js
	new $ |resolve reject
		define = |required do-define!
			exports = required.shift()
			assert =? exports 'exports
			successful-require = !|...modules
				except
					try
						exports = new Object
						modules.unshift exports
						do-define! ...modules
						keys = Object.keys exports
						resolve case
							and (=? 1 keys.length) (=? 'default keys[0])
								exports.default
							else
								exports
					catch err
						reject err

			-require- required successful-require reject

		fun define
