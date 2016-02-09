import
	.Number Int

random-int-upto. \max:Int
	Math.floor * Math.random() max

random-int. \min:Int max:Int
	diff = - max min
	random-diff = random-int-upto diff
	+ min random-diff

random-bool. \
	<? Math.random() 0.5
