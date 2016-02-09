import
	..compare
	..control opr
	..Type.Poly impl!
	..Type.Pred-Type _ Opt
	..Type.primitive Num

Int. new Pred-Type
	| A multiple of 1.
	| This only contains Numbers for which integer methods return sensible results, AKA safe ints.
	| This is anything between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER.
	name.
	predicate. Number.isSafeInteger

Nat. new Pred-Type
	| Any counting number, including `0`.
	name.
	predicate. &(and :Int >=? _ 0)

region impl!
	todo  impl*!
	impl! compare Number .\other:Num
		- this other

region Integer arithmetic
	modulo. \numerator:Num denominator:Num
		| Mathematical modulus.
		| Smallest positive number which can be added to a multiple of `denominator` to get `numerator`.
		case
			<? numerator 0
				+ (Math.abs denominator) % numerator denominator
			else
				% numerator denominator

	int/. \a:Num b:Num
		| Integer division: throws out any remainder.
		| This is the default in other programming languages, but in Mason `/ 1 2` is 0.5, not 0.
		Math.floor / a b

	divisible?. \a:Num b:Num
		| Whether an integer number of `b` can add up to `a`.
		=? 0 % a b

region Real arithmetic
	log-base. \base:Num n:Num
		| Mathematical logarithm.
		/ (Math.log n) (Math.log base)

	nearest-ceil. \_:Num step:Num
		* step (Math.ceil / _ step)

	nearest-floor. \_:Num step:Num
		* step (Math.floor / _ step)

	nearest-round. \_:Num step:Num
		* step (Math.round / _ step)

region Near
	near?. \a b:Num sig-figs:Opt[Nat]
		| Whether they are within sig-figs precision.
		sig-figs := opr sig-figs 6
		case
			=? a 0
				near-0? b sig-figs
			=? b 0
				near-0? a sig-figs
			else
				avg-mag = / (+ (Math.abs a) (Math.abs b)) 2
				n-digits-avg-mag = Math.floor (Math.log10 avg-mag)
				scale = Math.pow 10 neg n-digits-avg-mag
				scaled-diff = - (* a scale) * b scale
				epsilon = Math.pow 10 neg sig-figs
				<? (Math.abs scaled-diff) epsilon

	near-0?. \_ sig-figs:Opt[Nat]
		| Whether it is close to zero.
		| It must be `0.0...` where there are `sig-figs` 0s after the decimal point.
		sig-figs := opr sig-figs 6
		|| This is more accurate than `Math.pow 0.1 sig-figs`
		max = Math.pow 10 * -1 sig-figs
		<? Math.abs_ max

region Utilities
	mid. \a:Num b:Num
		todo doc
		/ (+ a b) 2
