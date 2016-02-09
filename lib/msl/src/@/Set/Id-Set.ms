import
	todo SYNTAX use global.Set but rename it to Js-Set
	global
	...Type.Type has-instance?
	..@ ++! --! count each! empty!
	.Set

Id-Set. global.Set

trait! Id-Set Set
	(count) \
		.size

	todo  Make default falling back to +!
	(++!) !\@added
		each! @added .&add

	(empty!) !\
		.clear()

	todo  Make default falling back to -!
	(--!) !\@deleted
		each! @deleted .&delete

	(has-instance?) \_
		.has_
