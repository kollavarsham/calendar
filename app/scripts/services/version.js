'use strict';

/**
 * @ngdoc service
 * @name calendarApp.Version
 * @description
 * # Version
 * Factory in the calendarApp.
 */
angular.module('calendarApp')
  .factory('Version', function ($resource, serviceConfigConstant) {
    return $resource('version.json', {}, serviceConfigConstant.config);
  });
