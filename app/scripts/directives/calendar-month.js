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

        // set up auto-scrolling to selected date or today
        $timeout(function () {
          if (element.find('.selected').length) {
            var selectedMonthNamePrefix = element.find('.month-name').text().substr(0, 3);
            var selectedMonthLink = angular.element('.month-nav').find('a').filter(function () {
              return $(this).text().match(new RegExp('^' + selectedMonthNamePrefix));
            });
            $timeout(function () {
              selectedMonthLink.click();
            }, 10);
          } else if (element.find('.today').length) {
            var currentMonthNamePrefix = element.find('.month-name').text().substr(0, 3);
            var currentMonthLink = angular.element('.month-nav').find('a').filter(function () {
              return $(this).text().match(new RegExp('^' + currentMonthNamePrefix));
            });
            $timeout(function () {
              currentMonthLink.click();
            }, 10);
          }

          // attach the day detail on-focus popover
          angular.element('.day-popover').popover({html : true});
        }, 0);

      }
    };
  });
