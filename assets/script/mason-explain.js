import MasonEditor from './mason-editor/mason-editor'
import methodUrl from './method-url'
import { setMarkdownContent } from './U/markdown'
import { makeLink, replaceNode } from './U/dom'

const MasonExplainPrototype = Object.assign(Object.create(HTMLElement.prototype), {
	createdCallback() {
		setMarkdownContent(this, this.textContent)

		Array.prototype.forEach.call(this.querySelectorAll('pre'), pre => {
			// TODO: Why are tabs getting replaced by spaces?
			const code = pre.textContent.replace(/ {4}/g, '\t').trim()
			const edit = new MasonEditor()
			edit.setContent(code)
			replaceNode(pre, edit)
		})

		Array.prototype.forEach.call(this.querySelectorAll('code'), code => {
			const path = methodUrl(code.textContent)
			if (path !== undefined)
				replaceNode(code, makeLink(code.textContent, path))
		})

		this.style.visibility = 'visible'
	}
})

export default document.registerElement('mason-explain', {
	prototype: MasonExplainPrototype
})
