'use strict';

/**
 * @ngdoc service
 * @name calendarApp.Calendar
 * @description
 * # Calendar
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('Calendar', function ($resource, serviceConfigConstant) {
    return $resource(serviceConfigConstant.baseUrl + 'years/:year?lang=ml', {}, serviceConfigConstant.config);
  });
