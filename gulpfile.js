'use strict'

const
	createServer = require('http-server').createServer,
	data = require('gulp-data'),
	fs = require('fs'),
	gulp = require('gulp'),
	gulpJade = require('gulp-jade'),
	jade = require('jade'),
	mason = require('gulp-mason'),
	path = require('path'),
	plist = require('plist'),
	plumber = require('gulp-plumber'),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	yaml = require('js-yaml')

gulp.task('default', [ 'view', 'style', 'editor', 'static', 'script', 'script', 'serve' ])

const
	watchStream = (name, ext) => {
		const glob = `assets/${name}/**/*.${ext}`
		return gulp.src(glob).pipe(watch(glob, { verbose: true })).pipe(plumber())
	},
	simple = (name, ext, stream, outDir) => {
		let _ = watchStream(name, ext)
		if (stream !== undefined)
			_ = _.pipe(stream)
		if (outDir === undefined)
			outDir = name
		return _.pipe(gulp.dest(`public/${outDir}`))
	}

gulp.task('view', () => {
	jade.filters.raw = jade.runtime.escape
	return watchStream('view', 'jade')
	.pipe(data(file =>  ({
		path: file.history[0].replace(file.base, '').replace('.jade', '')
	})))
	.pipe(gulpJade({ jade: jade, pretty: true }))
	.pipe(gulp.dest('public'))
})

gulp.task('style', () => simple('style', 'styl', stylus()))

gulp.task('static', () => simple('static', '*', undefined, ''))

gulp.task('editor', () => {
	const pathYaml = 'assets/static/editor/Mason.tmLanguage.yaml'
	const pathPlist = 'public/editor/Mason.tmLanguage'
	const strYaml = fs.readFileSync(pathYaml, 'utf-8')
	const dictYaml = yaml.safeLoad(strYaml)
	const strPlist = plist.build(dictYaml)
	fs.writeFileSync(pathPlist, strPlist, "utf-8")
})

gulp.task('script', () =>
	watchStream('script', 'ms')
	.pipe(sourceMaps.init())
	// TODO: module style option: amdefine, amd, commonjs
	.pipe(mason({ forceNonLazyModule: true, includeAmdefine: false, checks: true, verbose: true }))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('public/script')))

gulp.task('serve', () => { createServer({ root: 'public' }).listen(8000) })
