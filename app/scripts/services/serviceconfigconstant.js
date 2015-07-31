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
    baseUrl : 'http://kollavarsham-calendar.herokuapp.com/api/',
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
