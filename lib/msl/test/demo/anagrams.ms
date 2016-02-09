import
	msl.@.Map.multi-map add-to-@!
	msl.compare sort
	..tests

maximum-anagram-sets. \words
	| http://rosettacode.org/wiki/Anagrams#JavaScript
	|| e.g., 'amnos -> ['mason 'monas]
	sorted->words = empty Id-Map
	for words
		todo  Function to add just one new element
		add-to-@! sorted->words sort_ [_]
	max-count = max (@map (@values sorted->words) count)
	@keep (@values sorted->words) &(=? count_ max-count)

tests 'demo
	maximum-anagram-sets -> !\
		w = "
			abel able bale bela elba
			alger glare lager large regal
			angel angle galen glean lange
			caret carte cater crate trace
			elan lane lean lena neal
			evil levi live veil vile
			random words to prove it's doing work
		words = w.split `\s`
		assert seq=? (maximum-anagram-sets words)
			. ['abel 'able 'bale 'bela 'elba]
			. ['alger 'glare 'lager 'large 'regal]
			. ['angel 'angle 'galen 'glean 'lange]
			. ['caret 'carte 'cater 'crate 'trace]
			. ['elan 'lane 'lean 'lena 'neal]
			. ['evil 'levi 'live 'veil 'vile]
