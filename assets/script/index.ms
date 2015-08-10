window.requirejs.config
	baseUrl. "./lib"
	paths. (marked. "marked/marked.min" msl. "msl/dist" mason-compile. "mason-compile/dist")
	scriptType. case
		(new RegExp "firefox").test window.navigator.userAgent
			"text/javascript;version=1.8"
		else
			"text/javascript"

success = |boot-order
	(Object.getOwnPropertyDescriptor boot-order "_get").value.get()
	window.require [ "../script/mason-explain" ]
# TODO: This should be unnecessary because mason deps should automatically use! boot
window.require [ "msl/private/boot-order" ] success |err
	throw! err
