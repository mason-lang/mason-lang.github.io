'use strict'

const
	babel = require('gulp-babel'),
	createServer = require('http-server').createServer,
	eslint = require('gulp-eslint'),
	gulp = require('gulp'),
	gulpJade = require('gulp-jade'),
	jade = require('jade'),
	plumber = require('gulp-plumber'),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch')

gulp.task('default', [ 'view', 'style', 'lint', 'lib', 'image', 'script', 'serve' ])

const
	watchStream = (name, ext) => {
		const glob = `assets/${name}/**/*.${ext}`
		return gulp.src(glob).pipe(watch(glob, { verbose: true })).pipe(plumber())
	},
	simple = (name, ext, stream, outName) => {
		if (outName === undefined)
			outName = name
		let _ = watchStream(name, ext)
		if (stream !== undefined)
			_ = _.pipe(stream)
		return _.pipe(gulp.dest(`public/${outName}`))
	}

gulp.task('view', () => {
	jade.filters.raw = jade.runtime.escape
	return simple('view', 'jade', gulpJade({ jade: jade, pretty: true }), '')
})

gulp.task('style', () => simple('style', 'styl', stylus()))

gulp.task('lib', () =>
	gulp.src('bower_components/**/*', { base: 'bower_components' })
	.pipe(watch('bower_components', { verbose: true }))
	.pipe(gulp.dest('public/lib')))

gulp.task('image', () => simple('image', '*'))

gulp.task('script', () =>
	watchStream('script', 'js')
	.pipe(sourceMaps.init())
	.pipe(babel({
		modules: 'amd',
		whitelist: [ 'es6.destructuring', 'es6.modules', 'strict' ]
	}))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('public/script')))

gulp.task('lint', () =>
	gulp.src('assets/script/**/*.js')
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError()))

gulp.task('serve', () => {
	const port = 8000
	createServer({ root: 'public' }).listen(port)
	console.log(`Serving at localhost:${port}`)
})
