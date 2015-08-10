# TODO: mason-dom package

use
	msl.@.@ _ empty! iterator
	msl.@.@-Type _ from-stream
	msl.@.Seq.Seq _ +>!
	msl.Function Action
	msl.js defined?
	msl.Type.Kind kind! self-kind!
	msl.Type.Method impl! impl-for self-impl!
	msl.Type.Pred-Type ObjLit
	msl.Type.Type =>

Node. global.Node
Node-List. global.NodeList
Element. global.Element
HTML-Element. global.HTMLElement


kind! Node-List Seq
self-kind! Node-List @-Type

self-impl! from-stream Node-List |stream
	=> Array stream

impl! iterator Node-List (impl-for iterator Array)

impl! empty! Node .!|
	for!
		unless! .firstChild
			break!
		.removeChild .firstChild

impl! +>! Node .|_
	.appendChild _

elem. |a b
	case
		defined? b
			a.querySelector b
		else
			document.querySelector a

@elem. |a b
	case
		defined? b
			a.querySelectorAll b
		else
			document.querySelectorAll a

on. |event-name:String elem:HTML-Element action:Action
	elem.addEventListener event-name action

replace-node!. |old-node:Node new-node:Node
	old-node.parentNode.replaceChild new-node old-node

set-content!. !|elem:Node content
	empty! elem
	do-set-content! elem content

do-set-content! = !|elem content
	case! content
		:String
			elem.textContent := _
		:Node
			elem.appendChild _
		:@
			for! sub in _
				elem.appendChild sub

new-elem. |elem-type:String b c
	with document.createElement elem-type as elem
		case! b
			not defined?_
				forbid! defined? c
			:ObjLit
				Object.assign elem b
				if! defined? c
					do-set-content! elem c
			else
				do-set-content! elem b
				forbid! defined? c
