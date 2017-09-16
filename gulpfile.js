const _ = require('lodash')
const gulp = require('gulp')
const path = require('path')
const File = require('vinyl')
const yaml = require('yamljs')
const fs = require('fs-jetpack')
const exec = require('gulp-exec')
const through = require('through2')

const hexRx = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

_.templateSettings.interpolate = /"{([\s\S]+?)}"/g;

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

function tryRbg (hex) {
  const n16 = (c) => parseInt(c, 16)
  const isRgb = hexRx.test(hex)
  const cs = isRgb ? hexRx.exec(hex) : []
  const rgb = `${n16(cs[1])}, ${n16(cs[2])}, ${n16(cs[3])}`
  return isRgb ? { hex, rgb } : hex
}

function convertColors (obj) {
  return _.mapValues(obj, col => {
    return _.isString(col) ? tryRbg(col) : convertColors(col)
  })
}

function colors (file) {
  const content = file.contents.toString('ascii')
  const defs = yaml.parse(content)
  return convertColors(defs)
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
  const defs = colors(file)
  build(['widget.xml', 'widget.json'],  defs)
    .map(this.push.bind(this))
  next()
}

function themes (file, enc, next) {
  const defs = colors(file)
  build(['syntax.xml', 'ui.json'], defs)
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

gulp.task('watch', () => gulp.watch('./src/**/*', ['themes', 'widgets']))
