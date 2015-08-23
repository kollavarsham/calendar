'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:calendarMonth
 * @description
 * # calendarMonth
 */
angular.module('calendarApp')
  .directive('calendarMonth', function ($timeout, utils) {

    var getMalayalamMonthNames = function (month) {
      var malayalamMonthNames = month.days.map(function (day) {
        return day.malayalamMonth;
      });
      var uniqueMonths = utils.unique(malayalamMonthNames);
      return uniqueMonths.join(' - ');
    };

    var getMalayalamYears = function (month) {
      var malayalamYears = month.days.map(function (day) {
        return day.malayalamYear;
      });
      var uniqueYears = utils.unique(malayalamYears);
      return uniqueYears.join(' - ');
    };

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
        var weeks = scope.weeks = [];

        scope.year = scope.month.days[0].year;

        scope.weekdaysLookup = utils.weekdaysLookup;

        scope.malayalamMonthNames = getMalayalamMonthNames(month);

        scope.malayalamYears = getMalayalamYears(month);

        for (var i = 0; i < month.days.length; i++) {
          // cache the day we're looping with
          var day = month.days[i];

          // add a new week at the start and when 7 days have been added to previous one
          if (weeks.length === 0 || weeks[weeks.length - 1].length === 7) {
            weeks.push([]);
          }

          // add the empty cells for when 1st of month is not a Sunday
          if (day.date === 1) {
            var weekdaysIndices = Object.keys(scope.weekdaysLookup);
            var emptyCellsCount = 0;
            for (var j = 0; j < weekdaysIndices.length; j++) {
              var index = weekdaysIndices[j];
              if (day.weekdayName === scope.weekdaysLookup[index][scope.lang]) {
                emptyCellsCount = index;
                break;
              }
            }
            for (var k = 0; k < emptyCellsCount; k++) {
              weeks[weeks.length - 1].push({});
            }
          }

          // add a new boolean property 'isToday' which will be true only for the current date
          var today = new Date();
          day.isToday = day.year === today.getFullYear() &&
            day.month === utils.monthsLookup[today.getMonth() + 1].en &&
            day.date === today.getDate();

          // add a new boolean property 'isSelected' which will be true only for the selected date
          if (scope.sel) {
            day.isSelected = day.year === scope.sel.getFullYear() &&
              day.month === utils.monthsLookup[scope.sel.getMonth() + 1].en &&
              day.date === scope.sel.getDate();
          }

          // add a fullDate property to show the full date
          day.fullDate = day.date + ' ' + day.month + ' ' + day.year;

          // add the day into the right position within the week array
          weeks[weeks.length - 1].push(day);

          // add the empty cells for when the last day of the month is not a Saturday
          if (i === month.days.length - 1) {
            for (var l = 0, len = 7 - weeks[weeks.length - 1].length; l < len; l++) {
              weeks[weeks.length - 1].push({});
            }
          }
        }

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
          angular.element('.day-popover').popover();
        }, 0);

      }
    };
  });
