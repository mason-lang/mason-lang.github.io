'use strict'

require('source-map-support').install()
const
	babel = require('gulp-babel'),
	fs = require('fs-promise'),
	gulp = require('gulp'),
	mason = require('gulp-mason'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

gulp.task('compile', [ 'js', 'ms', 'compile-test' ])
gulp.task('watch', [ 'watch-js', 'watch-ms', 'watch-test' ])

// Compile

gulp.task('js', () => pipeJs(gulp.src(srcJs)))
gulp.task('watch-js', () => pipeJs(srcWatch(srcJs)))

gulp.task('ms', () => pipeMs(gulp.src(srcMs)))
gulp.task('watch-ms', () => pipeMs(srcWatch(srcMs)))

gulp.task('compile-test', ['make-lib-link'], () => pipeMsTest(gulp.src(test)))
gulp.task('watch-test', ['make-lib-link'], () => pipeMsTest(srcWatch(test)))
// Make msl accessible from tests.
gulp.task('make-lib-link', () =>
	fs.symlink('../lib', 'node_modules/msl').catch(error => {
		if (!error.message.startsWith('EEXIST'))
			console.log(error.stack)
	}))

// Helpers

const
	srcMs = 'src/**/*.ms',
	srcJs = 'src/**/*.js',
	test = 'test/**/*.ms',
	testDest = 'compiled-test',
	lib = 'lib'

const
	watchVerbose = (glob, then) => watch(glob, { verbose: true }, then),

	srcWatch = glob => gulp.src(glob).pipe(watchVerbose(glob)).pipe(plumber()),

	pipeJs = stream =>
		stream
		.pipe(sourcemaps.init())
		.pipe(babel({
			plugins: ['transform-es2015-modules-umd', 'transform-strict-mode']
		}))
		.pipe(sourcemaps.write({ debug: true, sourceRoot: '/src' }))
		.pipe(gulp.dest(lib)),

	pipeMs = stream =>
		stream
		.pipe(sourcemaps.init())
		.pipe(mason({
			// Can't automatically import boot because some of these modules *are* boot.
			importBoot: false,
			// Can't use builtins because msl is what defines them.
			builtins: {
				'global': [ 'Array', 'Boolean', 'Error', 'Function', 'Math', 'Number', 'Object', 'Promise', 'Proxy', 'RegExp', 'String', 'Symbol' ]
			},
			includeAmdefine: true,
			lazyModules: true
		}))
		.pipe(sourcemaps.write({
			debug: true,
			includeContent: false,
			sourceRoot: './src'
		}))
		.pipe(gulp.dest(lib)),

	pipeMsTest = stream =>
		stream
		.pipe(sourcemaps.init())
		.pipe(mason({
			includeAmdefine: true
		}))
		.pipe(sourcemaps.write({debug: true, includeContent: false, sourceRoot: './test'}))
		.pipe(gulp.dest(testDest))
