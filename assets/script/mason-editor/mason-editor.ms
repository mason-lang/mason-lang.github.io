use
	global document HTMLElement
	msl.$ $after $done
	msl.js defined?
	msl.to-string inspect
	msl.Try $catch
	require
	..U.dom elem on set-content!
	.compile
	.evaluate
	.make-codemirror ms-code-mirror js-code-mirror

template = elem (elem "#link-mason-editor").import "template"

MasonEditor = class HTMLElement
	"attachedCallback" !|
		unless! defined? .initialCode
			.initialCode := .textContent.trim()

		set-content! this (document.importNode template.content true)

		e = elem[this]
		ms = e "#ms"
		js = e "#js"
		.ms = ms-code-mirror ms
		.js = js-code-mirror js
		.statusIcon = e "#statusIcon"
		.out = e "#out"

		# Only expand JS when hovering. CSS animations for this in mason-editor.styl.
		on "mouseover" js !|
			js.style.max-height := "{(elem js ".CodeMirror").offsetHeight}px"
		on "mouseout" js !|
			js.style.max-height := "0.5em"

		.setStatus "writing"
		.ms.on "changes" !|
			.setStatus "writing"
		.statusIcon.onclick := !|
			.compile()

		.ms.setValue .initialCode

		.style.visibility := "visible"

	"setContent" !|code
		.initialCode := code

	"compile" !|
		unless! =? "working" .status
			.setStatus "working"
			msCode = .ms.getValue()
			success? result = compile msCode
			case!
				success?
					.js.setValue result
					.evaluate result
				else
					.-show-compile-error result

	"evaluate" !|js
		f = $after (evaluate require js) |val
			.out.textContent := inspect val
			.setStatus "compiled"
		$done ($catch f |err
			.-show-eval-error err.stack

	"-show-compile-error" !|error-elem
		.js.setValue ""
		.setStatus "error"
		set-content! .out error-elem

	"-show-eval-error" !|error-elem
		.setStatus "error"
		set-content! .out error-elem

	"setStatus" !|status
		.status := status
		.statusIcon.className := switch status
			"compiled"
				"fa fa-check"
			"writing"
				"fa fa-refresh"
			"working"
				"fa fa-refresh spinning"
			"error"
				"fa fa-exclamation"

document.registerElement "mason-editor"
	prototype. MasonEditor.prototype
