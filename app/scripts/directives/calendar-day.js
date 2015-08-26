'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:calendarDay
 * @description
 * # calendarDay
 */
angular.module('calendarApp')
  .directive('calendarDay', function (utils) {
    return {
      restrict    : 'E',
      templateUrl : 'views/calendar-day.html',
      scope       : {
        day : '=day',
        lang: '=lang'
      },
      link        : function (scope) {
        var day = scope.day;
        if (!(day.date && day.tithi)) {
          return;
        }
        // add a fullDate property to show the full date
        day.fullDate = day.date + ' ' + day.month + ' ' + day.year;

        // add amavasi and purnima (newmoon and fullmoon) into the calendar
        // TODO: Move the below array into utils (possibly the whole model adapter should be a new service)
        var tithis = utils.tithisLookup;
        var NEW_MOON_UNICODE = '🌑';
        var FULL_MOON_UNICODE = '🌕';
        var paksa = day.paksa === 'Suklapaksa' ? FULL_MOON_UNICODE : NEW_MOON_UNICODE;
        day.moon = day.tithi === 15 ? paksa : undefined;
        day.tithiDay = day.moon || tithis[day.tithi][scope.lang || 'ml'];
      }
    };
  });
