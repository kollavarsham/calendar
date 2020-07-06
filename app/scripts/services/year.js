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
    return $resource(serviceConfigConstant.baseUrl + 'year/:year?lang=:lang', {}, serviceConfigConstant.config);
  });
