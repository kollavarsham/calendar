'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:calendarMonth
 * @description
 * # calendarMonth
 */
angular.module('calendarApp')
  .directive('calendarMonth', function ($timeout, utils) {
    return {
      restrict    : 'E',
      replace     : true,
      templateUrl : 'views/calendar-month.html',
      scope       : {
        month : '=month',
        lang  : '=lang',
        sel   : '=sel'
      },
      link        : function (scope, element) {
        var month = scope.month;

        scope.year = scope.month.days[0].year;

        scope.weekdaysLookup = utils.weekdaysLookup;

        scope.malayalamMonthNames = utils.getMalayalamMonthNames(month);

        scope.malayalamYears = utils.getMalayalamYears(month);

        scope.weeks = utils.calculateWeeks(scope);

        $timeout(function () {

          if (element.find('.selected').length) {
            scope.$parent.$emit('selectedMonthRendered', utils.getMonthNamePrefix(element));
          }

          if (element.find('.today').length) {
            scope.$parent.$emit('currentMonthRendered', utils.getMonthNamePrefix(element));
          }

        });
      }
    };
  });
