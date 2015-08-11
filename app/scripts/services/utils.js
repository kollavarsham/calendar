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

    this.weekdaysLookup = {
      0 : {en : 'Sunday', ml : 'ഞായർ'},
      1 : {en : 'Monday', ml : 'തിങ്കൾ'},
      2 : {en : 'Tuesday', ml : 'ചൊവ്വ'},
      3 : {en : 'Wednesday', ml : 'ബുധൻ'},
      4 : {en : 'Thursday', ml : 'വ്യാഴം'},
      5 : {en : 'Friday', ml : 'വെള്ളി'},
      6 : {en : 'Saturday', ml : 'ശനി'}
    };

  });
