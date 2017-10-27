'use strict';

var gulp = require('gulp');

// develop
var browserSync = require('browser-sync');

// sass compiler
var sass = require('gulp-sass');

// css sourcemap
var sourcemaps = require('gulp-sourcemaps');

// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

// error handling
var plumber = require('gulp-plumber');

// css header
var header = require('gulp-header');
var replace = require('gulp-replace');

gulp.task('default', ['browser-sync']);
