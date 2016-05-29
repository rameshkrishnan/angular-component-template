var gulp = require('gulp')
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    templateCache = require('gulp-angular-templatecache'),
    KarmaServer = require('karma').Server,
    package = require('./package.json'),
    folder = {
        src : './src',
        dist : './dist',
        temp : './.tmp'
    },
    config = {
        moduleName: package.name,
        html: folder.src + '/**/*.template.html',
        sass: folder.src + '/**/*.scss',
        js: [
            folder.src + '/**/*.module.js',
            folder.src + '/**/*.js',
            folder.temp + '/templates.js'
        ]
    };
    
function processHtml() {
    return gulp.src(config.html)
        .pipe(templateCache('templates.js', { module: config.moduleName, moduleSystem: 'IIFE'}))
        .pipe(gulp.dest(folder.temp));
}

function convertSASStoCSS() {
    return gulp.src(config.sass)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(csso())
        .pipe(gulp.dest(folder.dist));
}

function processJs() {
    return gulp.src(config.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest(folder.dist))
        .pipe(uglify())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest(folder.dist));
}

function test(done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
}

gulp.task('sass', convertSASStoCSS);
gulp.task('js', ['template'], processJs);
gulp.task('template', processHtml);
gulp.task('test', test);
gulp.task('build', ['sass', 'js']);