// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-31 using
// generator-karma 1.0.0

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // base path, that will be used to resolve files and exclude
    basePath : '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks : [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files : [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-xeditable/dist/js/xeditable.js',
      'bower_components/angular-busy/dist/angular-busy.js',
      'bower_components/scrollup/dist/jquery.scrollUp.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jasmine/lib/jasmine-core/jasmine.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js",
      // fixtures
      {pattern : 'test/mock/*.json', watched : true, served : true, included : false},
      // view templates
      "app/views/**/*.html"
    ],

    // list of files / patterns to exclude
    exclude : [],

    // web server port
    port : 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers : [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins : [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-spec-reporter",
      "karma-coverage",
      "karma-ng-html2js-preprocessor"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : false,

    colors : true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel : config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    // coverage reporter generates the coverage
    reporters : ['spec', 'coverage'],

    specReporter: {maxLogLines: 10},

    preprocessors : {
      // pre-process HTML files into AngularJS templates.
      'app/views/**/*.html' : ['ng-html2js'],
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js' : ['coverage']
    },

    // configure the html2js preprocessor
    ngHtml2JsPreprocessor : {
      //// strip this from the file path
      //stripPrefix   : 'public/',
      //stripSuffix   : '.ext',
      //// prepend this to the
      //prependPrefix : 'served/',

      // or define a custom transform function
      //cacheIdFromPath : function (filepath) {
      //  return cacheId;
      //},

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      // moduleName : 'calendarViews'
    },

    // configure the reporter
    coverageReporter : {
      dir       : 'coverage/',
      reporters : [
        // reporters not supporting the `file` property
        {type : 'html', subdir : 'report-html'},
        {type : 'lcov', subdir : 'report-lcov'},
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {type : 'cobertura', subdir : '.', file : 'cobertura.txt'},
        {type : 'lcovonly', subdir : '.', file : 'report-lcovonly.txt'},
        {type : 'teamcity', subdir : '.', file : 'teamcity.txt'},
        {type : 'text', subdir : '.', file : 'text.txt'},
        {type : 'text-summary', subdir : '.', file : 'text-summary.txt'},
      ]
    }
  });
};
