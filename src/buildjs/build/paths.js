var path = require('path');

var appRoot = 'src/';
var outputRoot = 'wwwroot/dist/';
var packageRoot = 'wwwroot/jspm_packages/';
var typingsRoot = 'typings/';

module.exports = {
  root: appRoot,
  tsSource: appRoot + '**/*.ts',
  tsxSource: appRoot + '**/*.tsx',
  jspmDefinitions: packageRoot + '**/*.d.ts',
  typings: typingsRoot + '**/*.d.ts',
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
