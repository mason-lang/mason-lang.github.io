import
	global document HTMLElement
	msl.Promise $done
	require
	..U.dom elem on set-content!
	.compile-or-span
	.$evaluate
	.make-codemirror ms-code-mirror js-code-mirror

template = elem (elem "\#link-mason-editor").import 'template

MasonEditor = class HTMLElement
	'attachedCallback !|
		.initialCode := .textContent.trim()

		set-content! this (document.importNode template.content true)

		e = elem[this]

		ms = e "\#ms"
		.ms = ms-code-mirror ms
		.ms.setValue .initialCode

		case
			null? (.getAttribute 'no-eval)
				js = e "\#js"
				.js = js-code-mirror js
				.statusIcon = e "\#statusIcon"
				.out = e "\#out"

				|| Only expand JS when hovering. CSS animations for this in mason-editor.styl.
				on 'mouseover js !|
					js.style.max-height := "#((elem js ".CodeMirror").offsetHeight)px"
				on 'mouseout js !|
					js.style.max-height := "0.5em"

				.set-status! 'writing
				.ms.on 'changes !|
					.set-status! 'writing
				.statusIcon.onclick := .&compile!
			else
				-! this (e 'output)

		.style.visibility := 'visible

	'compile! !|
		unless =? 'working .status
			.set-status! 'working
			msCode = .ms.getValue()
			success? result = compile-or-span msCode
			case
				success?
					.js.setValue result
					$done (.$evaluate! result)
				else
					.-show-compile-error result

	'$evaluate! $!|js
		except
			try
				val = $ $evaluate require js
				.out.textContent := inspect val
				.set-status! 'compiled
			catch _
				.-show-eval-error _.stack

	'-show-compile-error !|error-elem
		.js.setValue ""
		.set-status! 'error
		set-content! .out error-elem

	'-show-eval-error !|error-elem
		.set-status! 'error
		set-content! .out error-elem

	'set-status! !|status
		.status := status
		.statusIcon.className := switch status
			'compiled
				"fa fa-check"
			'writing
				"fa fa-refresh"
			'working
				"fa fa-refresh spinning"
			'error
				"fa fa-exclamation"

document.registerElement 'mason-editor
	prototype. MasonEditor.prototype
