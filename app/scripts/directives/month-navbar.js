'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:monthNavbar
 * @description
 * # monthNavbar
 */
angular.module('calendarApp')
  .directive('monthNavbar', function ($location, $anchorScroll) {
    return {
      templateUrl : 'views/month-navbar.html',
      restrict    : 'E',
      scope       : {
        months : '=months'
      },
      link        : function postLink(scope) {
        scope.scrollTo = function (loc) {
          loc = 'month-' + loc;
          var old = $location.hash();
          $location.hash(loc);
          $anchorScroll();
          $location.hash(old);
        };
      }
    };
  });
