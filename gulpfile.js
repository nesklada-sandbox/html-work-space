"use strict";

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require("gulp-clean-css");
const fileinclude = require("gulp-file-include");
const del = require("del");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const htmlmin = require("gulp-htmlmin");
const replace = require("gulp-replace");
const purgecss = require("gulp-purgecss");
const version = require("gulp-version-number");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const notify = require("gulp-notify");
const webp = require('gulp-webp');
const avif = require('gulp-avif');

const path = {
    dist: {
        root: "./dist/",
        js: "./dist/js/",
        jsmain: "./dist/js",
        css: "./dist/css/",
        images: "./dist/img/",
        fonts: "./dist/fonts/",
    },

    app: {
        root: "./app/",
        htmlViews: "./app/views/pages/*.html",
        style: "./app/css/",
        scss: "./app/scss/*.scss",
        js: "./app/js/",
        jsComponents: "./app/js/component/",
        images: "./app/img/",
        fonts: "./app/fonts/",
        js_init: "./app/js/_init.js"
    },

    watch: {
        html: "./app/views/**/*.html",
        style: "./app/scss/",
        js: "./app/js/component/**/*.js",
    },
};

const versionConfig = {
    value: "%DT%",
    append: {
        cover: 1,
        key: "v",
        to: [
            {
                type: "css",
                files: ["site.css"],
            },
            {
                type: "js",
                files: ["custom.js"],
            },
        ],
    },
};

const html_dev = (done) => {
    src(path.app.htmlViews)
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(replace(/{{var_path_env}}/g, path.app.root))
        .pipe(dest("./"))
        .pipe(browserSync.reload({ stream: true }));

    done();
};

const style_dev = (done) => {
    src(path.app.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", notify.onError()))
        .pipe(sourcemaps.write("."))
        .pipe(dest(path.app.style))
        .pipe(browserSync.reload({ stream: true }));

    done();
};

const js_dev = (done) => {
    src(path.app.js_init)
        .pipe(plumber())
        .pipe(
            webpackStream({
                output: {
                    filename: "custom.js",
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: [
                                        [
                                            "@babel/preset-env",
                                            { targets: "defaults" },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
                mode: "development",
            })
        )
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("."))
        .pipe(dest(path.app.js))
        .pipe(browserSync.reload({ stream: true }));

    done();
};

const watching = () => {
    browserSync({
        server: {
            baseDir: "./",
        },
        notify: false,
        host: "localhost",
        open: "external",
        port: 3000,
        logPrefix: "server",
    });

    watch(path.watch.html, html_dev);
    watch(path.watch.style, style_dev);
    watch([path.watch.js, path.app.js_init], js_dev);
};

const clean_dist = (done) => {
    del.sync("dist");

    done();
};

const html_prod = () => {
    return src(path.app.htmlViews)
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(replace(/{{var_path_env}}/g, path.dist.root))
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                minifyCSS: true,
                removeComments: true,
            })
        )
        .pipe(version(versionConfig))
        .pipe(dest("./"));
};

const style_prod = (done) => {
    src(path.app.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer(["last 10 versions", "> 1%", "ie 11"], {
                cascade: true,
            })
        )
        .pipe(
            purgecss({
                content: ["./*.html"],
                whitelist: ['webp', 'avif', 'jpng']
            })
        )
        .pipe(cleanCSS({ level: { 1: { specialComments: 0 }, 2: {} } }))
        .pipe(dest(path.dist.css));

    done();
};

const js_prod = (done) => {
    src(path.app.js_init)
        .pipe(plumber())
        .pipe(
            webpackStream({
                output: {
                    filename: "custom.js",
                    environment: {
                        arrowFunction: false
                    }
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: [
                                        [
                                            "@babel/preset-env",
                                            { targets: "defaults" },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
                mode: "production",
            })
        )
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest(path.dist.js));

    done();
};

const webpImages = () => {
    return src([`./img/**/**.{jpg,jpeg,png}`])
        .pipe(webp({
            quality: 85
        }))
        .pipe(dest('./webp'))
};

const avifImages = () => {
    return src([`./img/**/**.{jpg,jpeg,png}`])
        .pipe(avif({
            quality: 85
        }))
        .pipe(dest('./avif'))
};

const clean_webp = (done) => {
    del.sync("webp");

    done();
};

const clean_avif = (done) => {
    del.sync("avif");

    done();
};

exports.default = series(series(html_dev, style_dev, js_dev), watching);
exports["generate:img"] = series(clean_webp, clean_avif, webpImages, avifImages);
exports["build:prod"] = series(clean_dist, html_prod, js_prod, style_prod);
exports["style:prod"] = series(style_prod);
