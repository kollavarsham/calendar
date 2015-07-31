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
    scrollName     : 'scrollUp',      // Element ID
    scrollDistance : 105,         // Distance from top/bottom before showing element (px)
    scrollFrom     : 'top',           // 'top' or 'bottom'
    scrollSpeed    : 300,            // Speed back to top (ms)
    easingType     : 'linear',        // Scroll to top easing (see http://easings.net/)
    animation      : 'fade',           // Fade, slide, none
    animationSpeed : 200,         // Animation speed (ms)
    scrollTrigger  : false,        // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget   : false,         // Set a custom target element for scrolling to. Can be element or number
    scrollText     : 'Top', // Text for element, can contain HTML
    scrollTitle    : 'Back to the top',          // Set a custom <a> title if required.
    activeOverlay  : '#FF0000',        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex         : 2147483647           // Z-Index for the overlay
  });
});
