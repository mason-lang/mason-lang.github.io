import require from 'require'
import { empty, setContent } from '../U/dom'
import { $done } from '../U/Promise'
import $compile from './$compile'
import $eval from './$eval'
import { msCodeMirror, jsCodeMirror } from './make-codemirror'
import masonToString from 'mason/to-string'
const inspect = _ms.getModule(masonToString).inspect

const template =
	document.getElementById('link-mason-editor').import.querySelector('template')

const MasonEditorPrototype = Object.assign(Object.create(HTMLElement.prototype), {
	attachedCallback() {
		if (this.initialCode === undefined)
			this.initialCode = this.textContent.trim()
		empty(this)
		this.appendChild(document.importNode(template.content, true))

		const get = id => this.querySelector(`#${id}`)
		const ms = get('ms'), js = get('js')
		this.ms = msCodeMirror(ms)
		this.js = jsCodeMirror(js)
		this.statusIcon = get('statusIcon')
		this.out = get('out')

		// Only expand JS when hovering. CSS animations for this in mason-editor.styl.
		js.addEventListener('mouseover', () => {
			js.style['max-height'] = `${js.querySelector('.CodeMirror').offsetHeight}px`
		})
		js.addEventListener('mouseout', () => { js.style['max-height'] = '0.5em' })

		this.setStatus('writing')
		this.ms.on('changes', () => { this.setStatus('writing') })
		this.statusIcon.onclick = () => this.compile()

		this.ms.setValue(this.initialCode)

		this.style.visibility = 'visible'
	},

	setContent(code) {
		this.initialCode = code
	},

	compile() {
		if (this.status === 'working')
			// Already compiling / running code.
			// TODO: Run code in Worker. Stop it if this is clicked again.
			return

		this.setStatus('working')
		const msCode = this.ms.getValue()
		$done($compile(msCode).then(({ success, result }) => {
			if (success) {
				this.js.setValue(result)
				this.evaluate(result)
			}
			else
				this.showError(result)
		}))
	},

	evaluate(js) {
		$done($eval(require, js).then(val => {
			this.out.textContent = inspect(val)
			this.setStatus('compiled')
		}).catch(err => this.showError(err.stack)))
	},

	showError(errorDomNode) {
		this.js.setValue('')
		this.setStatus('error')
		setContent(this.out, errorDomNode)
	},

	setStatus(status) {
		this.status = status
		const className = () => {
			switch (status) {
				case 'compiled': return 'fa fa-check'
				case 'writing': return 'fa fa-refresh'
				case 'working': return 'fa fa-refresh spinning'
				case 'error': return 'fa fa-exclamation'
				default: throw new Error(status)
			}
		}
		this.statusIcon.className = className()
	}
})

export default document.registerElement('mason-editor', {
	prototype: MasonEditorPrototype
})
