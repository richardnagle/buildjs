var path = require('path');

var appRoot = 'src/';
var outputRoot = 'wwwroot/dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  typescriptSource: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  sourceMapRelativePath: '../' + appRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};