'use strict'

const
	createServer = require('http-server').createServer,
	data = require('gulp-data'),
	fs = require('fs'),
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	mason = require('gulp-mason'),
	path = require('path'),
	plist = require('plist'),
	plumber = require('gulp-plumber'),
	sourceMaps = require('gulp-sourcemaps'),
	svg2png = require('svg2png'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	yaml = require('js-yaml')

gulp.task('default', [ 'view', 'style', 'editor', 'icon', 'static', 'script', 'script', 'serve' ])

const
	doAndWatch = (src, action) => {
		action()
		watch(src, action)
	},
	watchGlob = glob =>
		gulp.src(glob).pipe(watch(glob, { verbose: true })).pipe(plumber()),
	watchDir = (name, ext) =>
		watchGlob(`assets/${name}/**/*.${ext}`),
	simple = (name, ext, stream, outDir) => {
		let _ = watchDir(name, ext)
		if (stream !== undefined)
			_ = _.pipe(stream)
		if (outDir === undefined)
			outDir = name
		return _.pipe(gulp.dest(`public/${outDir}`))
	}

gulp.task('view', () => {
	return watchGlob([ 'assets/view/**/*.jade', '!assets/view/lib/**/*' ])
	.pipe(data(file =>  ({
		path: file.history[0].replace(file.base, '').replace('.jade', '')
	})))
	.pipe(jade())
	.pipe(gulp.dest('public'))
})

gulp.task('style', () => simple('style', 'styl', stylus()))

gulp.task('editor', () => {
	const src = 'assets/static/editor/Mason.tmLanguage.yaml'
	const dest = 'public/editor/Mason.tmLanguage'
	doAndWatch(src, () => {
		const strYaml = fs.readFileSync(src, 'utf-8')
		const dictYaml = yaml.safeLoad(strYaml)
		const strPlist = plist.build(dictYaml)
		if (!fs.existsSync('public/editor'))
			fs.mkdirSync('public/editor')
		fs.writeFileSync(dest, strPlist, "utf-8")
	})
})

// TODO: svg icons obviate this
gulp.task('icon', () => {
	const src = 'assets/static/icon.svg'
	doAndWatch(src, () => {
		svg2png(src, 'public/icon.png', err => { if (err) throw err })
	})
})

gulp.task('static', () => simple('static', '*', undefined, ''))

gulp.task('script', () =>
	watchDir('script', 'ms')
	.pipe(sourceMaps.init())
	// TODO: module style option: amdefine, amd, commonjs
	.pipe(mason({ forceNonLazyModule: true, includeAmdefine: false, checks: true, verbose: true }))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('public/script')))

gulp.task('serve', () => { createServer({ root: 'public' }).listen(8000) })
