'use strict';

/**
 * @ngdoc overview
 * @name calendarApp
 * @description
 * # calendarApp
 *
 * Main module of the application.
 */
angular
  .module('calendarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable',
    'cgBusy'
  ]).config(function ($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl  : 'views/main.html',
        controller   : 'MainCtrl',
        controllerAs : 'main'
      })
      .otherwise({
        redirectTo : '/'
      });
  }).run(function ($anchorScroll, editableOptions) {
    $anchorScroll.yOffset = 60;

    editableOptions.theme = 'bs3';
  });

// jQuery plugin for scrollup
$(function () {
  $.scrollUp({
    scrollDistance : 105,
    scrollText     : '',
    scrollTitle    : 'Back to the top'
  });
});
