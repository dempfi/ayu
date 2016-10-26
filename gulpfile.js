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

function fileNmae (str, name) {
  const version = /sublime="(.*?)"/g.exec(str)[1]
  const prefix = /prefix="(.*?)"/g.exec(str)[1]
  const ext = /ext="(.*?)"/g.exec(str)[1]
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

function ui (file, enc, next) {
  const content = file.contents.toString('ascii')
  build('ui.json', yaml.parse(content))
    .map(this.push.bind(this))
  next()
}

function syntax (file, enc, next) {
  const content = file.contents.toString('ascii')
  build('syntax.yml', yaml.parse(content))
    .map(this.push.bind(this))
  next()
}

gulp.task('clean', () => {
  fs.find({ recursive: false, matching: '*.sublime-theme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.tmTheme' }).forEach(fs.remove)
  fs.find({ recursive: false, matching: '*.yml' }).forEach(fs.remove)
})

gulp.task('widgets', ['clean'], () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(widgets))
    .pipe(gulp.dest('./widgets'))
)

gulp.task('ui', ['clean'], () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(ui))
    .pipe(gulp.dest('./'))
)

gulp.task('syntax', ['clean'], () =>
  gulp.src('./src/themes/*.yml')
    .pipe(through.obj(syntax))
    .pipe(gulp.dest('./'))
    .pipe(exec('subl "<%= file.path %>" && subl --command "convert_file"'))
    .pipe(exec.reporter())
)

gulp.task('default', ['ui', 'syntax', 'widgets'])

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['ui', 'syntax', 'widgets'])
})