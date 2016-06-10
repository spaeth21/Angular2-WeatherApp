/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.npmSrc = "./node_modules/";
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.lib = paths.webroot + "lib/";

gulp.task("copyDeps:ng2material",
    function() {
        gulp.src(paths.npmSrc + '/ng2-material/ng2-material.css')
            .pipe(gulp.dest(paths.lib + 'ng2-material'));
       return gulp.src(paths.npmSrc + '/ng2-material/font/font.css')
            .pipe(gulp.dest(paths.lib + 'ng2-material'));

    });
gulp.task("copyDeps:fontAwesome",
    function () {
        return gulp.src(paths.npmSrc + '/font-awesome/**/*.*')
        .pipe(gulp.dest(paths.lib + 'font-awesome/'));
    });

gulp.task("copyDeps:shim",
    function () {
        return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*')
        .pipe(gulp.dest(paths.lib + 'es6-shim/'));
    });
gulp.task("copyDeps:materialize",
    function () {
        gulp.src(paths.npmSrc + '/materialize-css/dist/js/*.*')
                 .pipe(gulp.dest(paths.lib + 'materialize-css/'));
        return gulp.src(paths.npmSrc + '/materialize-css/dist/css/*.*')
             .pipe(gulp.dest(paths.lib + 'materialize-css/'));
    });
gulp.task("copyDeps:primeng",
    function () {
        return gulp.src(paths.npmSrc + '/primeui/primeui-ng-all.*')
                 .pipe(gulp.dest(paths.lib + 'primeui/'));
    });
gulp.task("copyDeps:reflect", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*.js')
         .pipe(gulp.dest(paths.lib + 'reflect-metadata/'));
});

gulp.task("copyDeps", ["copyDeps:shim", "copyDeps:reflect", "copyDeps:materialize", "copyDeps:primeng", "copyDeps:fontAwesome", "copyDeps:ng2material"]);



gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
