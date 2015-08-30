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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'xeditable',
    'cgBusy'
  ]).config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('year', {
        url         : '/{year:int}?lang&sel',
        params      : {
          year : (new Date()).getFullYear()
        },
        templateUrl : 'views/year.html'
      }).
      state('month', {
        url         : '/{year:int}/{month:int}?lang&sel',
        templateUrl : 'views/month.html'
      });

  }).run(function ($anchorScroll, editableOptions) {

    $anchorScroll.yOffset = 60;

    editableOptions.theme = 'bs3';

  });

// jQuery plugin for scrollup
$(function () {
  $.scrollUp({
    scrollDistance : 140,  // change here would need to reflect in /scripts/controllers/year.js too ###
    scrollText     : '',
    scrollTitle    : 'Back to the top'
  });
});
