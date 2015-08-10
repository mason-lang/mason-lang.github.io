use
	marked
	msl.@.@ keep
	msl.@.Seq.Seq indexes slice
	msl.@.Set.Id-Set
	msl.compare =?
	msl.Object p
	.dom Node new-elem set-content!

set-markdown-content!. !|node md
	node.innerHTML := marked md
	join-to-sections! node

# TODO: slice for NodeList
split = |list is-type-b? yield-a! yield-b!
	last ::= 0
	type-a? ::= true

	for! i in indexes list
		_ = list[i]
		this-b? = is-type-b?_
		case!
			and this-b? type-a?
				# First type-b. Yield preceeding type-a_s.
				yield-a! (slice list last i)
				last := i
				type-a? := false
			and (not this-b?) (not type-a?) # TODO: nor
				# First type-a.
				yield-b! (slice list last i)
				last := i
				type-a? := true
			else
				pass

	# TODO:SYNTAX ternary
	last-yield! = case
		type-a?
			yield-a!
		else
			yield-b!
	last-yield! (Array.prototype.slice.call list last list.length)

inside-section-types = new Id-Set [ "p" "ul" ]

text-node-type = p Node "TEXT_NODE"
is-text-node? = |node:Node
	=? text-node-type node.nodeType

is-inside-section? = |_
	and (not is-text-node?_) _.tagName.toLowerCase():inside-section-types

join-to-sections! = !|node
	good-children = keep node.childNodes |_
		# Don't include whitespace-only text nodes.
		not and is-text-node?_ (not (new RegExp "\\S").test _.textContent)

	set-content! node
		# TODO:SYNTAX build
		@for
			yield-a = !|outside-nodes
				... outside-nodes
			split good-children is-inside-section? yield-a !|inside-nodes
				. new-elem "section" inside-nodes
			break!

