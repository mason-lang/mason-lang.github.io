import
	.tests

tests 'RegExp
	url = `(.+)\.(.+)`

	has-instance? ->
		[url "mason-lang.org"] -> true
		[url 'masonlangorg] -> false

	extract -> !\
		case "mason-lang.org"
			:url domain ext
				assert =? domain 'mason-lang
				assert =? ext 'org
