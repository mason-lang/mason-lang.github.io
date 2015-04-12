window.global = window

const isFirefox = /firefox/i.test(navigator.userAgent)

window.requirejs.config({
	// Global requires are assumed to be for lib.
	baseUrl: '../lib',
	paths: {
		marked: '../lib/marked/marked.min',
		mason: '../lib/mason/dist'
	},
	scriptType: isFirefox ? 'text/javascript;version=1.8' : 'text/javascript'
})

// require([ 'mason/private/boot-order' ], () =>
//	require([ 'mason/meta/run-all-tests' ], rat => _ms.getModule(rat).default()))
require([ '../script/mason-explain' ])
