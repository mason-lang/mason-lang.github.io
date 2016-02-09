import
	...compare _ less?
	...js defined?
	...polys del-sub! set-sub!
	..@ empty empty! empty? iterator
	.Map ?get
	.Sorted-Map

Splay-Tree. class trait Sorted-Map
	| Default Sorted-Map implementation.
	| Binary tree that is good at accessing the same values many times.
	static
		(empty) \
			new this undefined

	construct .root:Splay-Node
		pass

	(iterator) \
		node-iter = *!\_
			if defined?_
				yield* node-iter _.left
				yield [_.key _.val]
				yield* node-iter _.right
		node-iter .root

	(empty?) \
		not defined? .root

	(empty!) !\
		.root := undefined

	(?get) \key
		if and (not empty? this) (.splay!? key)
			.root.val


	(set-sub!) !\key val
		case
			empty? this
				.root := new Splay-Node key val undefined undefined
			.splay!? key
				.root.val := val
			else
				old-root = .val
				forbid empty? this
				.root := case
					<? old-root.key key
						old-right = old-root.right
						old-root.right := undefined
						new Splay-Node key val old-root old-right
					else
						old-left = old-root.left
						old-root.left := undefined
						new Splay-Node key val old-left old-root


	(del-sub!) \key
		if and (not empty? this) (.splay!? key)
			removed = .root
			|| Link out the root.
			.root := case
				removed.has-left?
					right = removed.right || OK if null
					new-root = removed.left
					|| Splay to make sure the new root has an empty right child.
					.splay!? key
					new-root.right := right
					new-root
				else
					|| New tree is just right child - no left child to worry about.
					removed.right

			removed.val

	|| Searches for the key, bringing nodes up to the root along the way.
	|| Returns whether the root now matches the key.
	my splay!? \key
		dummy = new Splay-Node undefined undefined undefined undefined
		left = dummy
		right = dummy
		cur = .root

		found = for
			case compare key cur.key
				<? _ 0
					unless cur.has-left?
						break false
					link-right! = !\new-right
						right.left := new-right
						cur := new-right.left
						right := new-right
					case
						less? key cur.left.key
							|| Rotate right
							old-left = cur.left
							cur.left := old-left.right
							old-left.right := cur
							unless old-left.has-left?
								cur := old-left
								break false
							cur := old-left
							link-right! old-left
						else
							link-right! cur
				<? 0 _
					unless cur.has-right?
						break false
					link-left! = !\new-left
						left.right := new-left
						cur := new-left.right
						left := new-left
					case
						less? cur.right.key key
							|| Rotate left
							tmp = cur.right
							cur.right := tmp.left
							tmp.left := cur
							unless tmp.has-right?
								cur := tmp
								break false
							link-left! tmp
						else
							link-left! cur
				else
					break true

		left.right := cur.left
		right.left := cur.right
		cur.left := dummy.right
		cur.right := dummy.left
		.root := cur
		found


region Private
	Splay-Node = class
		construct .key .val .left .right
			pass

		get has-left?
			defined? .left

		get has-right?
			defined? .right
