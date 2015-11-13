todo mason-dom package

import
	global document HTMLElement Node NodeList
	msl.@.@-Type _ from-stream

kind! NodeList Seq
self-kind! NodeList @-Type

self-impl! from-stream NodeList |stream
	=> Array stream

impl! iterator NodeList (impl-for iterator Array)

impl! empty! Node .!|
	todo SYNTAX while
	for
		unless .firstChild
			break
		.removeChild .firstChild

impl! +>! Node .|_
	.appendChild _

impl! -! Node .!|_
	.removeChild _

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

on. |event-name:Str elem:HTMLElement action:Action
	elem.addEventListener event-name action

replace-node!. |old-node:Node new-node:Node
	old-node.parentNode.replaceChild new-node old-node

set-content!. !|elem:Node content
	empty! elem
	do-set-content! elem content

do-set-content! = !|elem content
	case content
		:Str
			elem.textContent := _
		:Node
			elem.appendChild _
		:@
			for sub-elem of _
				elem.appendChild case sub-elem
					:Str
						document.createTextNode_
					else
						_

new-elem. |elem-type:Str b c
	with document.createElement elem-type as elem
		case b
			not defined?_
				forbid defined? c
			:ObjLit
				Object.assign elem b
				if defined? c
					do-set-content! elem c
			else
				do-set-content! elem b
				forbid defined? c
