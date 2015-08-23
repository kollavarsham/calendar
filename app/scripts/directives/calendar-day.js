'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:calendarDay
 * @description
 * # calendarDay
 */
angular.module('calendarApp')
  .directive('calendarDay', function () {
    return {
      restrict    : 'E',
      templateUrl : 'views/calendar-day.html',
      scope       : {
        day : '=day'
      }
    };
  });
