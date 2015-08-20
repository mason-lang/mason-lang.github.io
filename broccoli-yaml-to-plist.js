const
	Filter = require('broccoli-filter'),
	plist = require('plist'),
	yaml = require('js-yaml')

module.exports = YamlFilter
function YamlFilter(input, options) {
	if (!(this instanceof YamlFilter)) return new YamlFilter(input, options)
	Filter.call(this, input, options)
}
YamlFilter.prototype = Object.create(Filter.prototype)
Object.assign(YamlFilter.prototype, {
	constructor: YamlFilter,
	extensions: [ 'tmLanguage.yaml' ],
	targetExtension: 'tmLanguage',
	processString(contents, relativePath) {
		return plist.build(yaml.safeLoad(contents))
	}
})
