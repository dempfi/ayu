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
  const matching = { ui: '*.json', syntax: '*.yml' }[type]
  return fs.find('./src/templates', { matching })
    .map(p => fs.read(p, 'utf8'))
    .map(_.template)
}

function themePath (str, name, type) {
  const rx = /sublime=(\d)/g
  const match = rx.exec(str)
  const suffix = match ? match[1] : ''
  const ext = { ui: '.sublime-theme', syntax: '.yml' }[type]
  return path.join(process.cwd(), `ayu-${name}${suffix}${ext}`)
}

function buildSyntaxThemes (theme, syntax) {
  const base = process.cwd()
  return templates('syntax')
    .map(template => template(syntax))
    .map(compiled => [themePath(compiled, theme, 'ui'), compiled])
    .map(([path, compiled]) => [path, new Buffer(compiled)])
    .map(([path, contents]) => new File({ path, base, contents }))
}

function buildTheme (type, theme, options) {
  const base = process.cwd()
  return templates(type)
    .map(template => template(options))
    .map(compiled => [themePath(compiled, theme, type), compiled])
    .map(([path, compiled]) => [path, new Buffer(compiled)])
    .map(([path, contents]) => new File({ path, base, contents }))
}

function buildUI (file, enc, next) {
  const content = file.contents.toString('ascii')
  const {theme, ui, syntax} = yaml.parse(content)
  buildTheme('ui', theme, ui).map(this.push.bind(this))
  next()
}

function buildSyntax (file, enc, next) {
  const content = file.contents.toString('ascii')
  const {theme, ui, syntax} = yaml.parse(content)
  buildTheme('syntax', theme, syntax).map(this.push.bind(this))
  next()
}

gulp.task('clean', () => {
  fs.find({ recursive: false, matching: '*.sublime-theme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.tmTheme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.yml' }).forEach(fs.remove)
})

gulp.task('ui', ['clean'], () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(buildUI))
    .pipe(gulp.dest('./'))
)

gulp.task('syntax', ['clean'], () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(buildSyntax))
    .pipe(gulp.dest('./'))
    .pipe(exec('subl "<%= file.path %>" && subl --command "convert_file"'))
    .pipe(exec.reporter())
)

gulp.task('default', ['ui', 'syntax'])

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['ui', 'syntax'])
})
