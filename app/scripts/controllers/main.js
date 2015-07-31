'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, Calendar) {

    $scope.$watch('year', function (newYearValue) {
      $scope.calendar = Calendar.query({
        year : newYearValue
      });
    });

    $scope.year = (new Date()).getFullYear();

    $scope.previous = function () {
      console.log('previous');
      $scope.year = $scope.year - 1;
    };

    $scope.next = function () {
      console.log('next');
      $scope.year = $scope.year + 1;
    };

    $scope.scrollTo = function (loc) {
      var old = $location.hash();
      $location.hash(loc);
      $anchorScroll();
      $location.hash(old);
    };
  });
