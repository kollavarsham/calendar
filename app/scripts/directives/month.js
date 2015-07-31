'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:month
 * @description
 * # month
 */
angular.module('calendarApp')
  .directive('month', function (utils) {
    return {
      restrict    : 'E',
      replace     : true,
      templateUrl : 'views/month.html',
      link        : function (scope) {
        var weekdaysLookup = {
          0 : 'ഞായർ     ',
          1 : 'തിങ്കൾ   ',
          2 : 'ചൊവ്വ    ',
          3 : 'ബുധൻ     ',
          4 : 'വ്യാഴം   ',
          5 : 'വെള്ളി   ',
          6 : 'ശനി      '
        };

        var month = scope.month;
        var weeks = scope.weeks = [];

        var malayalamMonthNames = month.days.map(function (day) {
          return day.malayalamMonth;
        });
        var uniqueMonths = utils.unique(malayalamMonthNames);
        scope.malayalamMonthNames = uniqueMonths.join(' - ');

        var malayalamYears = month.days.map(function (day) {
          return day.malayalamYear;
        });
        var uniqueYears = utils.unique(malayalamYears);
        scope.malayalamYears = uniqueYears.join(' - ');

        for (var i = 0; i < month.days.length; i++) {
          if (weeks.length === 0 || weeks[weeks.length - 1].length === 7) {
            weeks.push([]);
          }
          if (month.days[i].date === 1) {
            var weekdaysIndices = Object.keys(weekdaysLookup);
            var dummyLoop = 0;
            for (var j = 0; j < weekdaysIndices.length; j++) {
              var index = weekdaysIndices[j];
              if (month.days[i].weekdayName === weekdaysLookup[index]) {
                dummyLoop = index;
                break;
              }
            }
            for (var k = 0; k < dummyLoop; k++) {
              weeks[weeks.length - 1].push({});
            }
          }
          weeks[weeks.length - 1].push(month.days[i]);
        }
      }
    };
  });
