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
      },
      link        : function (scope) {
        var day = scope.day;
        // add a fullDate property to show the full date
        day.fullDate = day.date + ' ' + day.month + ' ' + day.year;

        // add amavasi and purnima (darkmoon and fullmoon) into the calendar
        // TODO: Move the below array into utils (possibly the whole model adapter should be a new service)
        var tithis = ['പ്രഥമ', 'ദ്വിതീയ', 'തൃതിയ', 'ചതുർത്ഥി', 'പഞ്ചമി', 'ഷഷ്ഠി', 'സപ്തമി', 'അഷ്ടമി', 'നവമി', 'ദശമി', 'ഏകാദശി', 'ദ്വാദശി', 'ത്രയോദശി', 'ചതുർദശി'];
        var LARGE_CIRCLE_UNICODE = '◯';
        var BLACK_LARGE_CIRCLE_UNICODE = '⬤';
        var paksa = day.paksa === 'Suklapaksa' ? LARGE_CIRCLE_UNICODE : BLACK_LARGE_CIRCLE_UNICODE;
        day.moon = day.tithi === 15 ? paksa : undefined;
        day.tithiDay = day.moon || tithis[day.tithi - 1];
      }
    };
  });
