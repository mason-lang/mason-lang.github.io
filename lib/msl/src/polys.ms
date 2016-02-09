import
	.private.bootstrap msDef

sub. poly \...args
	| Implementing this allows the use of the special syntax `a[b]`.
	abstract
msDef 'sub sub

set-sub!. poly \...args
	| Implementing this allows the use of the special syntax `a[b] = c`.
	abstract
msDef 'setSub set-sub!

del-sub!. poly \...args
	| Implementing this allows the use of the special syntax `del a[b]`.
	abstract
msDef 'del del-sub!
