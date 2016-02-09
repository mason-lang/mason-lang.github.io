todo TEST

import
	todo SYNTAX use global.Map but rename it to Js-Map
	global
	...hash-code
	...js defined?
	...polys del-sub! set-sub!
	..@ empty empty! iterator @map
	..? ?None Opt->? ?some
	.Id-Map
	.Map _ ?get

Hash-Map. class trait Map
	| Default Map type. Depends on efficient `hash-code` of its keys.
	static
		(empty) \
			new this new global.Map

	construct .val:Id-Map
		pass

	(iterator) *!\
		for bucket of .val.values()
			cur = bucket
			for
				unless defined? cur
					break
				yield [cur.key cur.val!]
				cur := cur.next!

	(?get) \key
		bucket = .val.get (hash-code key)
		entry = opt-bucket-entry bucket key
		todo @for
		@map (Opt->? entry) \_
			_.val!

	(set-sub!) !\key val
		hash = hash-code key
		bucket = .val.get hash
		case opt-bucket-entry bucket key
			defined?_
				todo Might not want to overwrite value...
				_.val! := val
			else
				|| Add it at the front.
				.val.set hash new Bucket key val bucket

	(del-sub!) \key
		hash = hash-code key
		bucket = .val.get hash
		case bucket
			defined?_
				case
					=? _.key key
						case bucket.next!
							defined?_
								.val.set key _
							else
								.val.delete hash
						?some _.val!
					else
						cur = bucket
						for
							next = cur.next!
							unless defined? next
								break ?None
							if =? next.key key
								cur.next! := next.next!
								break ?some next.val!
							cur := next
			else
				?None

	(empty!) !\
		.val.clear()

region Private
	Bucket = class
		construct .key val! next!
			.val! := val!
			.next! := next!

	|| All entries in the bucket have the same hash code.
	|| Find the first bucket that =? key.
	opt-bucket-entry = \opt-bucket key
		cur = opt-bucket
		for
			unless defined? cur
				break undefined
			if =? cur.key key
				break cur
			cur := cur.next!
