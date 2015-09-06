const
	funnel = require('broccoli-funnel'),
	jade = require('broccoli-jade'),
	mason = require('broccoli-mason'),
	merge = require('broccoli-merge-trees'),
	stylus = require('broccoli-stylus')

// Get jade to pass filename along
jade.prototype.processString = function(str, filename) {
	this.options.filename = filename
	this.options.data = { filename } // I added this
	return require('broccoli-jade/node_modules/jade').compile(str, this.options)(this.options.data);
}

const
	// Have to funnel it twice to get imports to work.
	// https://github.com/sindresorhus/broccoli-jade#a-note-about-include-paths
	view = funnel(
		jade(funnel('assets/view', { srcDir: '/', destDir: 'assets/view', exclude: ['**/lib/*.jade'] })),
		{ srcDir: 'assets/view', destDir: '/' }),
	style = funnel(
		stylus(funnel('assets/style', { exclude: ['lib.styl'] }), { include: [ 'assets/style' ] }),
		{ srcDir: '/', destDir: 'style' }),
	lib = funnel('bower_components', { srcDir: '/', destDir: 'lib' }),
	script = funnel(
		mason('assets/script', { forceNonLazyModule: true, includeAmdefine: false }),
		{ srcDir: '/', destDir: 'script' })

module.exports = merge([view, style, 'assets/static', lib, script])
