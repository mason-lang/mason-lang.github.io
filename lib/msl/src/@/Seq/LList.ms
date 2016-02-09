import
	..@ _ ++ empty empty? from-stream iterator
	.Seq _ <++~ @tail

LList. class trait Seq
	| Singly-linked list.

	static
		(empty) \
			empty-LList
		(from-stream) \_
			<++~ empty-LList _

	construct .head .tail
		pass

	(iterator) *!\
		cur = this
		for
			if empty? cur
				break
			yield cur.head
			cur := cur.tail

	(empty?) \
		==? this empty-LList

	(@tail) \
		.tail

	(<++~) \left-added:@
		iter = iterator left-added
		f = \
			{value done} = iter.next()
			cond done this new LList value f()
		f()

	(++) \other
		|| For the concatenation of two LLists, we can just use the second as a tail.
		case other
			:LList
				<++~ other this
			else
				++.default.call this other

empty-LList = new LList undefined undefined
Object.defineProperty empty-LList 'tail
	value. empty-LList
