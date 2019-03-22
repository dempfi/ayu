const _ = require('lodash')
const gulp = require('gulp')
const path = require('path')
const File = require('vinyl')
const yaml = require('yamljs')
const fs = require('fs-jetpack')
const exec = require('gulp-exec')
const through = require('through2')
const clearRequire = require('clear-require')

const hexRx = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

_.templateSettings.interpolate = /"{([\s\S]+?)}"/g

function colors(path) {
  clearRequire(`./src/themes/${path}`)
  return require(`./src/themes/${path}`)
}

function templates (type) {
  return fs.find('./src/templates', { matching: '*' + type })
    .map(p => fs.read(p, 'utf8'))
    .map(_.template)
}

function parse (rx, str, def = '') {
  const parsed = rx.exec(str)
  return parsed ? parsed[1] : def
}

function fileNmae (str, theme) {
  const version = parse(/sublime="(.*?)"/g, str)
  const prefix = parse(/prefix="(.*?)"/g, str)
  const ext = parse(/ext="(.*?)"/g, str, 'tmTheme')
  const name = `${prefix}ayu-${theme}${version}.${ext}`
  return path.join(process.cwd(), name)
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

function buildWidgets (file, enc, next) {
  build(['widget.xml', 'widget.json'], colors(file.relative))
    .map(this.push.bind(this))
  next()
}

function buildThemes (file, enc, next) {
  build(['syntax.xml', 'ui.json'], colors(file.relative))
    .map(this.push.bind(this))
  next()
}

const clean = () => {
  fs.find({ recursive: false, matching: '*.sublime-theme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.tmTheme' }).forEach(fs.remove)
}

const widgets = () =>
  gulp.src('./src/themes/!(color).js')
    .pipe(through.obj(buildWidgets))
    .pipe(gulp.dest('./widgets'))

const themes = () =>
  gulp.src('./src/themes/!(color).js')
    .pipe(through.obj(buildThemes))
    .pipe(gulp.dest('./'))

const watch = () =>
  gulp.watch('./src/**/*', gulp.parallel(themes, widgets))

exports.watch = watch
exports.default = gulp.parallel(themes, widgets)
