Mason's standard library features collections under the base type `@` (*bag*), a `Kind` for anything with an `iterator`.

An iterator is a `Generator!`, so you won't want to deal with them directly.
Instead, there are Funs for using them in the `@` and `Seq` modules (and elsewhere).

	use
		mason.@.@ map map'
		mason.math.methods *
		mason.show

	doubled-streaming = map [ 1 2 3 ] *[2]
	doubled-strict = map' [ 1 2 3 ] *[2]
	. show doubled-streaming (repr. true
	. show doubled-strict (repr. true


Most operations on @s by default produce `Stream`s,
meaning that computation is delayed until iteration actually happens.

A `Stream` is a simple wrapper around a Fun returning its iterator.
If the Stream is iterated a second time, the Fun will be called again producing a fresh iterator.
Streams are *streaming* but not *lazy*; for that, use `Lazy-Stream`.

Most of the time, your own Funs should return Streams; if the caller wants a more specific type, they can convert it theirself using the `=>` Method. It's wasteful to spend time writing to an `Array` if all the caller will do is convert it to a `Set`!


# Seq

`Seq`s are @s whose iteration order is reliable.

Note that we use `A` to refer to an immutable type and `A!` to refer to the mutable version. So `Seq` is the `Kind` of things that are iterated in a meaningful order, and a `Seq!` is a Seq that can be mutated.

Type | Features
:-: | :-:
`?` | An optional value; stores only up to 1 entry.
`Stream` | Memory storage is just the closure size. Can be infinite.
`Lazy-Stream` | Like a `Stream` but writes entries to an `Array` for fast lookup later.
`Array!` | Fast mutable push to end. Note that `Array!` is just an `Alias-Type` for `Array`.
`Deque!` | Like `Array`, but can efficiently push to beginning.
`LList` | Singly linked list. It has fast immutable push to front.
`Range` | A linear sequence of numbers.


# Set

The iteration order of `Set`s is not to be trusted. They have efficient `contains?`, `--!`, and `++!`.

Type | Features
:-: | :-:
`Hash-Set!` | Wraps an Id-Set!, using `=?` to compare entries.
`Id-Set!` | Faster than Hash-Set! at everything, but uses `id=?` instead of `=?`.

When a @'s iteration order does not matter, don't just make it a Set if its `contains?` doesn't have to be fast. Declare it to be an `@` and use a `Stream` or `Array` to represent it.


# Priority-Queue!

A `Priority-Queue!` has a `pop?!` method that takes the smallest element out.
However, iteration order is still untrustable.

There is currently only one type, `Heap-Priority-Queue!`.


# Map

Also known as dictionaries or hashes in other languages.

`Map`s iterate as `key. value.` pairs, and you can convert an @ of `key. value.` pairs back to a Map using `=> Map` (or `=>` your preferred Map subtype).

Like Sets, Maps don't have reliable iteration order, except for `Sorted-Map!`s.

Type | Features
:-: | :-:
`Hash-Map!` | Wraps an Id-Map!, using `=?` to compare keys.
`Id-Map!` | Faster than `Hash-Map!` at everything, but uses `id=?` instead of `=?`.
`Weak-Id-Map!` | An `Id-Map!` whose keys may be garbage collected. Used by `id-memoize`.
`Splay-Tree!` | Slower at everything, but is a Sorted-Map!.
