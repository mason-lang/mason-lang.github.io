import
	..@.@ _ fold

average. \@vals:@[Number]
	todo doc
	sum = 0
	count = 0
	for @vals
		sum := + sum _
		count := + 1 count
	/ sum count

sum. \@vals:@[Number]
	fold @vals 0 &+

product. \@vals:@[Number]
	fold @vals 1 &*
