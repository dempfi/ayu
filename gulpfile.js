const _ = require('lodash')
const gulp = require('gulp')
const path = require('path')
const File = require('vinyl')
const yaml = require('yamljs')
const fs = require('fs-jetpack')
const exec = require('gulp-exec')
const through = require('through2')

_.templateSettings.interpolate = /"{([\s\S]+?)}"/g;

function templates (type) {
  return fs.find('./src/templates', { matching: '*' + type })
    .map(p => fs.read(p, 'utf8'))
    .map(_.template)
}

function parse (rx, str, def = '') {
  let parsed = rx.exec(str)
  return parsed ? parsed[1] : def
}

function fileNmae (str, name) {
  let version = parse(/sublime="(.*?)"/g, str)
  let prefix = parse(/prefix="(.*?)"/g, str)
  let ext = parse(/ext="(.*?)"/g, str, 'tmTheme')
  return path.join(process.cwd(), `${prefix}ayu-${name}${version}.${ext}`)
}

function build (types, defs) {
  const base = process.cwd()
  const themes = _.concat([], types).map(templates)
  return _.flatten(themes)
    .map(template => template(defs))
    .map(compiled => [fileNmae(compiled, defs.theme), compiled])
    .map(([path, compiled]) => [path, new Buffer(compiled)])
    .map(([path, contents]) => new File({ path, base, contents }))
}

function widgets (file, enc, next) {
  const content = file.contents.toString('ascii')
  build(['widget.xml', 'widget.json'],  yaml.parse(content))
    .map(this.push.bind(this))
  next()
}

function themes (file, enc, next) {
  const content = file.contents.toString('ascii')
  build(['syntax.xml', 'ui.json'], yaml.parse(content))
    .map(this.push.bind(this))
  next()
}

gulp.task('clean', () => {
  fs.find({ recursive: false, matching: '*.sublime-theme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.tmTheme' }).forEach(fs.remove)
})

gulp.task('widgets', () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(widgets))
    .pipe(gulp.dest('./widgets'))
)

gulp.task('themes', () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(themes))
    .pipe(gulp.dest('./'))
)

gulp.task('default', ['themes', 'widgets'])

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['themes', 'widgets'])
})
