'use strict';

/**
 * @ngdoc service
 * @name calendarApp.utils
 * @description
 * # utils
 * Service in the calendarApp.
 */
angular.module('calendarApp')
  .service('utils', function () {

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

    this.weekdaysLookup = {
      0 : {en : 'Sunday', ml : 'ഞായർ'},
      1 : {en : 'Monday', ml : 'തിങ്കൾ'},
      2 : {en : 'Tuesday', ml : 'ചൊവ്വ'},
      3 : {en : 'Wednesday', ml : 'ബുധൻ'},
      4 : {en : 'Thursday', ml : 'വ്യാഴം'},
      5 : {en : 'Friday', ml : 'വെള്ളി'},
      6 : {en : 'Saturday', ml : 'ശനി'}
    };

    /* jshint -W100 */
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
    /* jshint +W100 */

  });
