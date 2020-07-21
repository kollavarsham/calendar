'use strict';

/**
 * @ngdoc service
 * @name calendarApp.serviceConfigConstant
 * @description
 * # serviceConfigConstant
 * Constant in the calendarApp.
 */
angular.module('calendarApp')
  .constant('serviceConfigConstant', {
    baseUrl : 'https://api.aws.kollavarsham.org/',
    config  : {
      query : {
        method  : 'GET',
        isArray : false,
        headers : {
          'Accept' : 'application/json'
        }
      }
    }
  });
