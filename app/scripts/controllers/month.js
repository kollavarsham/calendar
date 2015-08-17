'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MonthCtrl
 * @description
 * # MonthCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MonthCtrl', function ($scope, $state, $stateParams, Month) {

    $scope.init = function () {
      $scope.year = $stateParams.year;
      $scope.month = $stateParams.month;

      $scope.calendar = Month.query({
        year  : $scope.year,
        month : $scope.month
      });
    };

    $scope.init();
  });
