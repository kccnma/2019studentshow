let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

let browsersync = require('browser-sync').create();
let imagemin = require("gulp-imagemin");

sass.compiler = require('node-sass');

gulp.task("sass", () => {
    // Run $ sass styles/app.scss styles/app.css --watch
    return gulp.src("src/styles/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            cleanCSS({
                compatibility: 'ie8'
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"))
        .pipe(browsersync.stream())
});

gulp.task("html", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
});

gulp.task("img", () => {
    return gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"))
        // .pipe(browserSync.reload({ stream: true }))
});

gulp.task("js", () => {
    return gulp.src("src/js/*")
        .pipe(gulp.dest("dist/js"))
        // .pipe(browserSync.reload({ stream: true }))
});


gulp.task('watch', () => { 
    browsersync.init({
        server: { 
            baseDir: "dist"
        }
    });
    
    gulp.watch("src/styles/app.scss", ["sass"])
    gulp.watch("src/styles/partials/*.scss", ["sass"])
    gulp.watch("src/img/*", ["img"])
    gulp.watch("src/js/*", ["js"])
    gulp.watch("src/*.html", ["html"]).on("change", browsersync.reload)
});

gulp.task('default', ["sass", "html", "watch", "img", "js"]); 