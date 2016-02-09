import
	..@.@ all? any? fold
	..compare binary=?
	.bootstrap msDef

|| For efficiency, compiler only generates calls to these functions for:
|| * non-binary operations (`=? a b c`)
|| * functions (`&+`)
|| (So, we can define `operator+` in terms of the binary `+` operator.

region arithmetic
	operator+ = \...args
		fold args \a b
			+ a b
	msDef 'plus operator+

	operator- = \...args
		fold args \a b
			- a b
	msDef 'minus operator-

	operator* = \...args
		fold args \a b
			* a b
	msDef 'times operator*

	operator/ = \...args
		fold args \a b
			/ a b
	msDef 'div operator/

	operator% = \...args
		fold args \a b
			% a b
	msDef 'remainder operator%

	operator** = \...args
		fold args \a b
			** a b
	msDef 'exponent operator**

region comparisons
	|| From `=? a b c d`, evaluates `and (=? a b) (=? b c) (=? c d)`, etc.
	compare-many = \args op
		todo for-else
		res = op args[0] args[1]
		for i of 2...args.length
			unless op args[- i 1] args[i]
				res := false
				break
		res

	operator=? = \...args
		compare-many args binary=?
	msDef 'eqMany operator=?

	operator==? = \...args
		compare-many args Object.is
	msDef 'eqExact operator==?

	operator<? = \...args
		compare-many args \a b
			<? a b
	msDef 'lt operator<?

	operator<=? = \...args
		compare-many args \a b
			<=? a b
	msDef 'lte operator<=?

	operator>? = \...args
		compare-many args \a b
			>? a b
	msDef 'gt operator>?

	operator>=? = \...args
		compare-many args \a b
			>=? a b
	msDef 'gte operator>=?

region logic
	operator-and = \...args
		all? args
	msDef 'and operator-and

	operator-or = \...args
		any? args
	msDef 'or operator-or
