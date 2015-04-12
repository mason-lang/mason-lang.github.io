export const
	empty = node => {
		while (node.firstChild)
			node.removeChild(node.firstChild)
	},

	makeLink = (code, path) => {
		const _ = document.createElement('a')
		_.href = path
		_.textContent = code
		return _
	},

	setContent = (node, content) => {
		empty(node)
		if (content instanceof Node)
			node.appendChild(content)
		else
			node.textContent = content
	},

	replaceNode = (oldNode, newNode) =>
		oldNode.parentNode.replaceChild(newNode, oldNode)
