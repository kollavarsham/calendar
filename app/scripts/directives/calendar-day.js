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
      link        : function (scope, element) {
        var day = scope.day;
        if (!day.date) {
          return;
        }
        // add a fullDate property to show the full date
        day.fullDate = day.date + ' ' + day.month + ' ' + day.year;

        // add amavasi and purnima (newmoon and fullmoon) into the calendar
        var NEW_MOON_UNICODE = '🌑';
        var FULL_MOON_UNICODE = '🌕';
        day.moon = day.tithi === 0 ? FULL_MOON_UNICODE : day.tithi === 15 ? NEW_MOON_UNICODE : undefined;
        day.tithiDay = day.moon || utils.tithisLookup[day.tithi][scope.lang || 'ml'];

        var copyLink = function () {
          var date = new Date(day.fullDate);
          date.setHours(12);
          var link = utils.createSelectedDayLink(date);
          window.location = link;
        };

        element.on('click', copyLink);
      }
    };
  });
