var config       = require('../config')
if(!config.tasks.scripts) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var include      = require('gulp-include')
var minifyJS     = require('gulp-uglify')
var handleErrors = require('../lib/handleErrors')
var path         = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.scripts.src, '/*.{' + config.tasks.scripts.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.scripts.dest)
}

var scriptsTask = function () {
  return gulp.src('src/js/*.js')
    .pipe(include())
    .pipe(minifyJS())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('scripts', scriptsTask)
module.exports = scriptsTask