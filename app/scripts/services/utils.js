'use strict';

/**
 * @ngdoc service
 * @name calendarApp.utils
 * @description
 * # utils
 * Service in the calendarApp.
 */
angular.module('calendarApp')
  .service('utils', function ($filter) {

    /* jshint -W100 */
    this.weekdaysLookup = {
      0 : {en : 'Sunday', ml : 'ഞായർ'},
      1 : {en : 'Monday', ml : 'തിങ്കൾ'},
      2 : {en : 'Tuesday', ml : 'ചൊവ്വ'},
      3 : {en : 'Wednesday', ml : 'ബുധൻ'},
      4 : {en : 'Thursday', ml : 'വ്യാഴം'},
      5 : {en : 'Friday', ml : 'വെള്ളി'},
      6 : {en : 'Saturday', ml : 'ശനി'}
    };

    this.monthsLookup = {
      1  : {en : 'January', ml : 'ജനുവരി'},
      2  : {en : 'February', ml : 'ഫെബ്രുവരി'},
      3  : {en : 'March', ml : 'മാർച്ച്‌'},
      4  : {en : 'April', ml : 'ഏപ്രിൽ '},
      5  : {en : 'May', ml : 'മെയ്‌'},
      6  : {en : 'June', ml : 'ജൂണ്‍'},
      7  : {en : 'July', ml : 'ജൂലൈ'},
      8  : {en : 'August', ml : 'ഓഗസ്റ്റ്‌'},
      9  : {en : 'September', ml : 'സെപ്റ്റംബർ'},
      10 : {en : 'October', ml : 'ഒക്ടോബർ'},
      11 : {en : 'November', ml : 'നവംബർ'},
      12 : {en : 'December', ml : 'ഡിസംബർ'}
    };

    this.tithisLookup = {
      1  : {en : 'Prathama', ml : 'പ്രഥമ'},
      2  : {en : 'Dwithiya', ml : 'ദ്വിതീയ'},
      3  : {en : 'Thrithiya', ml : 'തൃതിയ'},
      4  : {en : 'Chathurthi', ml : 'ചതുർത്ഥി'},
      5  : {en : 'Panchami', ml : 'പഞ്ചമി'},
      6  : {en : 'Shashti', ml : 'ഷഷ്ഠി'},
      7  : {en : 'Sapthami', ml : 'സപ്തമി'},
      8  : {en : 'Ashtami', ml : 'അഷ്ടമി'},
      9  : {en : 'Navami', ml : 'നവമി'},
      10 : {en : 'Dasami', ml : 'ദശമി'},
      11 : {en : 'Ekadasi', ml : 'ഏകാദശി'},
      12 : {en : 'Dwadasi', ml : 'ദ്വാദശി'},
      13 : {en : 'Thrayodasi', ml : 'ത്രയോദശി'},
      14 : {en : 'Chathurdasi', ml : 'ചതുർദശി'}
    };
    /* jshint +W100 */

    this.unique = function (xs) {
      return xs.filter(function (x, i) {
        return xs.indexOf(x) === i;
      });
    };

    this.getMonths = function () {
      var months = [];
      for (var i = 0, keys = Object.keys(this.monthsLookup), len = keys.length; i < len; i++) {
        months.push({value : parseInt(keys[i], 10), text : this.monthsLookup[keys[i]].en});
      }
      return months;
    };

    this.getYears = function () {
      var years = [];
      for (var y = 1900; y < 2051; y++) {
        years.push({value : y, text : y});
      }
      return years;
    };

    this.getMalayalamMonthNames = function (month) {
      var malayalamMonthNames = month.days.map(function (day) {
        return day.malayalamMonth;
      });
      var uniqueMonths = this.unique(malayalamMonthNames);
      return uniqueMonths.join(' - ');
    };

    this.getMalayalamYears = function (month) {
      var malayalamYears = month.days.map(function (day) {
        return day.malayalamYear;
      });
      var uniqueYears = this.unique(malayalamYears);
      return uniqueYears.join(' - ');
    };

    this.showMonth = function (scope) {
      return function () {
        var selectedMonth = $filter('filter')(scope.calendar.months, {value : scope.calendar.month});
        return (scope.calendar.month && selectedMonth.length) ? selectedMonth[0].text : 'Not set';
      };
    };

    this.showYear = function (scope) {
      return function () {
        var selectedYear = $filter('filter')(scope.calendar.years, {value : scope.calendar.year});
        return (scope.calendar.year && selectedYear.length) ? selectedYear[0].text : 'Not set';
      };
    };

    this.getMonthNamePrefix = function (calendarMonthElement) {
      return calendarMonthElement.find('.month-name').text().substr(0, 3);
    };

    this.calculateWeeks = function ($scope) {
      var month = $scope.month, weeks = [];
      for (var i = 0; i < month.days.length; i++) {
        // cache the day we're looping with
        var day = month.days[i];

        // add a new week at the start and when 7 days have been added to previous one
        if (weeks.length === 0 || weeks[weeks.length - 1].length === 7) {
          weeks.push([]);
        }

        // add the empty cells for when 1st of month is not a Sunday
        if (day.date === 1) {
          var weekdaysIndices = Object.keys($scope.weekdaysLookup);
          var emptyCellsCount = 0;
          for (var j = 0; j < weekdaysIndices.length; j++) {
            var index = weekdaysIndices[j];
            if (day.weekdayName === $scope.weekdaysLookup[index][$scope.lang || 'ml']) {
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
          day.month === this.monthsLookup[today.getMonth() + 1].en &&
          day.date === today.getDate();

        // add a new boolean property 'isSelected' which will be true only for the selected date
        if ($scope.sel) {
          day.isSelected = day.year === $scope.sel.getFullYear() &&
            day.month === this.monthsLookup[$scope.sel.getMonth() + 1].en &&
            day.date === $scope.sel.getDate();
        }

        // add the day into the right position within the week array
        weeks[weeks.length - 1].push(day);

        // add the empty cells for when the last day of the month is not a Saturday
        if (i === month.days.length - 1) {
          for (var l = 0, len = 7 - weeks[weeks.length - 1].length; l < len; l++) {
            weeks[weeks.length - 1].push({});
          }
        }
      }
      return weeks;
    };

  });
