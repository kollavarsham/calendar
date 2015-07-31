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

  });
