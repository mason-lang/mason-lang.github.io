import
	..@ _ empty
	..?
import~
	.Heap-Priority-Queue

Priority-Queue. trait @
	| @ whose first item will always be the smallest.
	| Iteration order has no other guaranees,
	| but repeatedly calling ?pop! will give the values from least to greatest.

	static
		(empty) \
			new Heap-Priority-Queue

todo Move
?pop!. poly \:?
	| Takes a value from the front of the queue, unless empty?.
	abstract
