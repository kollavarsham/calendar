'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:yearPicker
 * @description
 * # yearPicker
 */
angular.module('calendarApp')
  .directive('yearPicker', function () {
    return {
      templateUrl: 'views/year-picker.html',
      restrict: 'E'
    };
  });
