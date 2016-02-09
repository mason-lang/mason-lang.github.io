import
	msl.compare sort
	.tests

tests 'String-as-Seq
	"" -> !\
		assert =? "123" (@map "123" identity)

	=> ->
		[String [1 2 3]] -> "123"
		[String [1 2 3] ", "] -> "1, 2, 3"

	sort -> !\
		todo
		pass
