import
	..@ empty
	.Map
import~
	.Splay-Tree

Sorted-Map. trait Map
	| Map whose `keys` are in sorted order.
	| This kind of Map depends on an efficient `compare` between its keys.

	static
		(empty) \
			empty Splay-Tree
