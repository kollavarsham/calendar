'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:monthPicker
 * @description
 * # monthPicker
 */
angular.module('calendarApp')
  .directive('monthPicker', function () {
    return {
      templateUrl: 'views/month-picker.html',
      restrict: 'E'
    };
  });
