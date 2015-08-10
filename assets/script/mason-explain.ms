use
	.mason-editor.mason-editor
	.?method-url
	.U.markdown set-markdown-content!
	.U.dom HTML-Element new-elem replace-node!

Mason-Explain = class HTML-Element
	"createdCallback" !|
		set-markdown-content! this .textContent

		for! pre in .querySelectorAll "pre"
			replace-node! pre with new mason-editor
				# TODO: Why are tabs getting replaced by spaces?
				code = (pre.textContent.replace (new RegExp " \{4}" "g") "\t").trim()
				_.setContent code

		for! code in .querySelectorAll "code"
			for! path in ?method-url code.textContent
				replace-node! code (new-elem "a" (href. path) code.textContent)

		.style.visibility := "visible"

document.registerElement "mason-explain"
	prototype. Mason-Explain.prototype
