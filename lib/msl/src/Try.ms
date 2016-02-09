import
	.Function Action
	.Type.Pred-Type Union
	.Type.primitive Str
	.Type.Type

todo class val
Success. class
	| Attempt that did not fail. _.val is the result of the attempted code.
	construct .val
		pass

try-result. \tried:Action
	| If `tried` throws an error, returns it; else returns Success of its result.
	except
		try
			new Success tried()
		catch
			_

fails?. \tried:Action
	| Whether the Function throws some error.
	except
		try
			tried()
			false
		catch
			ignore _
			true

fails-with?. \expected-error:Union[Str Type] tried:Action
	| Whether the Function throws an error of the given type or with the given message.
	except
		try
			tried()
			false
		catch error
			case expected-error
				:Type
					error:_
				:Str
					=? error.message _

annotate-errors. \~annotation:Str tried:Action
	| If there are thrown errors, prepends `annotation` to their stack and message.
	except
		try
			tried()
		catch
			_.stack := "#annotation#(_.stack)"
			_.message := "#annotation#(_.message)"
			throw _

region $
	$try. \_:Promise
		| Success if the Promise is resolved, Error if rejected.
		|| =>[Error] because it's possible for a Promise to reject with a non-Error.
		success = _.then \val
			new Success val
		success.catch \err
			err

	$annotate-errors. \~annotation:Str $tried:Promise
		| Like `annotate-errors` but works on errors thrown in a Promise.
		$tried.catch \_
			if :Error
				_.stack := "#annotation#(_.stack)"
				_.message := "#annotation#(_.message)"
			throw _
