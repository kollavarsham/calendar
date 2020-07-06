'use strict';

/**
 * @ngdoc service
 * @name calendarApp.Month
 * @description
 * # Month
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('Month', function ($resource, serviceConfigConstant) {
    return $resource(serviceConfigConstant.baseUrl + 'years/:year/month/:month?lang=:lang', {}, serviceConfigConstant.config);
  });
