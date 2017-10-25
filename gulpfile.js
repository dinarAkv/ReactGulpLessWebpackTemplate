var gulp = require('gulp');
var less = require('gulp-less');
var webpack = require('gulp-webpack');
var webpackconfig = require('./webpack.config.js');

// Preprocessing of js, jsx files.
gulp.task('webpack-dev', function(){
  gulp.src('./index.html')
      .pipe(gulp.dest('./dist'));

  return gulp.src(['./**/*.js', './**/*.jsx'])
          .pipe(webpack(webpackconfig))
          .pipe(gulp.dest('./dist'));
});

// Preprocessing of .less files.
gulp.task('less', function(){

  return gulp.src('./less/*.less')
              .pipe(less())
              .pipe(gulp.dest('./dist/css'));
});


// Start server.
gulp.task('start-server', function(){
  var express = require('express');
  var app = express();

  app.use(express.static(__dirname + '/dist'));

  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

  app.listen(8180, function(){
    console.log('App listen port 8180.');
  })
});






gulp.task('default', ['webpack-dev', 'less', 'start-server']);
