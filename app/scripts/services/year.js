'use strict';

/**
 * @ngdoc service
 * @name calendarApp.Year
 * @description
 * # Year
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('Year', function ($resource, serviceConfigConstant) {
    return $resource(serviceConfigConstant.baseUrl + 'years/:year?lang=:lang', {}, serviceConfigConstant.config);
  });
